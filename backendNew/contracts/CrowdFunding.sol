// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.12 <0.9.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract CrowdFunding {
    
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        string image;
        uint256 amountCollected;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;

    uint256 public numberOfCampaigns = 0;

    function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image) public returns (uint256) {

        Campaign storage campaign = campaigns[numberOfCampaigns];

        // check if everything okay
        require(campaign.deadline < block.timestamp, "The deadline should be a date in the future ");
        
        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.image = _image;
        campaign.amountCollected = 0;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;

    }   

    function donateToCampaign(uint256 _id, uint256 _amount, address _donatorPublicKey) public payable{

        uint256 amount = _amount;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(_donatorPublicKey);
        campaign.donations.push(amount);

        // implement target reached or not

        (bool sent,) = payable(campaign.owner).call{value: amount}("");

        if(sent){
            campaign.amountCollected += amount;
        }

    }

    function getDonators(uint256 _id) public view returns (address[] memory, uint256[] memory) {
        Campaign storage campaign = campaigns[_id];
        return (campaign.donators, campaign.donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCompaigns = new Campaign[](numberOfCampaigns);    

        for(uint i=0; i < numberOfCampaigns; i++){
            Campaign storage item = campaigns[i];
            allCompaigns[i] = item;
        } 

        return allCompaigns;

    }
}