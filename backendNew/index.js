const ethers = require('ethers');
require('dotenv').config();

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;

const provider = new ethers.providers.JsonRpcProvider(API_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const {abi} = require("./artifacts/contracts/CrowdFunding.sol/CrowdFunding.json");
const contractInstance = new ethers.Contract(contractAddress, abi, signer);

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());    

// app.get('/camp/:id', async(req, res) => {   //http://localhost:3000/products/1
//     try {
//         const id = req.params.id;
//         const product = await contractInstance.getProduct(id);
//         let prod = []
//         prod[0] = product[0];
//         prod[1] = parseInt(product[1]);
//         prod[2] = parseInt(product[2]);
//         res.send(prod);
//     }
//     catch (error) {
//         res.status(500).send(error.message);
//     }
// });

app.post('/donate', async(req, res) => {

    try {
        const {id, amount} = req.body;

        const amountWei = ethers.utils.parseEther(amount.toString());

        const tx = await contractInstance.donateToCampaign(id ,{
            value: amountWei 
        });

        await tx.wait();
        res.json({success: true})
    }
    catch (error) {
        res.status(500).send(error.message);
    }

});

app.get('/campaign/', async(req, res) => {
    try {
        const campaigns = await contractInstance.getCampaigns();
        const camp = campaigns.map(c => ({
            owner : c.owner,
            title: c.title,
            description: c.description,
            target: parseInt(c.target),
            deadline: parseInt(c.deadline),
            image: c.image,
            amountCollected: parseInt(c.amountCollected),
            donators: c.donators,
            donations: c.donations
        }))
        res.send(camp);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});


app.post('/createCampaign', async(req, res) => {
    try {
        const {owner, title, description, target, deadline, image} = req.body;

        console.log(req.body)

        // const tx = await contractInstance.createCampaign(owner, title, description, target, deadline, image);
        // await tx.wait();
        // res.json({success: true})
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

// app.put('/products/:id', async (req, res) => {   //http://localhost:3000/products/1
//     try {
//         const id = req.params.id;
//         const {name, price, quantity} = req.body;
//         const tx = await contractInstance.updateProduct(id, name, price, quantity);
//         await tx.wait();
//         res.json({success: true})
//     }
//     catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// app.delete('/products/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const tx = await contractInstance.deleteProduct(id);
//         await tx.wait();
//         res.json({success: true})
//     }
//     catch (error) {
//         res.status(500).send(error.message);
//     }
// });

const port = 5000;
app.listen(port, () => {
    console.log("API server is listening on port 5000")
})
