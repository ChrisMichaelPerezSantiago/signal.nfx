# ✓ signal.nfx
>  Custom API, Investing Network for Founders

## 📦 Installation

### npm
```shell
npm install signal.nfx
```
### yarn
```shell
yarn add signal.nfx
```


# 📚 Documentation

## `getInvestors(id: string)`

```typescript
(async () => {
  const response = await getInvestors("top-biotech-pre-seed-investors");
})();
```

## JSON example
<details>
  <summary>json</summary>

```json
{
  "name": "Seth Bannon",
  "name_id": "seth-bannon",
  "info": {
    "avatar": "https://signal-api.nfx.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMUVyQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--90decc5efc60760e887be16d1cb05455139f9306/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2hxY0djNkUzSmxjMmw2WlY5MGIxOW1hV3hzV3dkcEFsZ0NhUUpZQWc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--f8e22238db523e6e5e5a8ae643921849c4b207bd/0?d=160x160",
    "label_1": "Fifty Years",
    "label_2": "Partner"
  },
  "sweet_spot": {
    "label": "Sweet spot:",
    "value": "$1M"
  },
  "investment_location": "Investors in San Francisco (CA)",
  "profile": [
    {
      "investor_profile": {
        "person": {
          "name": "Seth Bannon",
          "roles": [
            "VC",
            "Founder",
            "Former CEO",
            "Investor"
          ],
          "url": "https://sethbannon.com/",
          "social_network": [
            {
              "domain": "sethbannon",
              "url": "https://www.sethbannon.com/"
            },
            {
              "domain": "linkedin",
              "url": "https://www.linkedin.com/in/sethbannon/"
            },
            {
              "domain": "twitter",
              "url": "https://www.twitter.com/sethbannon"
            },
            {
              "domain": "angel",
              "url": "https://www.angel.co/sethbannon"
            },
            {
              "domain": "crunchbase",
              "url": "https://www.crunchbase.com/person/seth-bannon"
            }
          ]
        },
        "headline": "Founding Partner at Fifty Years",
        "location": {
          "display_name": "San Francisco, California"
        },
        "investment_on_record": "21",
        "current_fund_size": null,
        "sector_stage_rankings": [
          "Seth Bannon",
          "AgTech",
          "AgTech",
          "BioTech",
          "BioTech",
          "Chemicals",
          "Chemicals",
          "ClimateTech/CleanTech",
          "ClimateTech/CleanTech",
          "DeepTech",
          "DeepTech",
          "Diagnostics",
          "Diagnostics",
          "Food and Beverage",
          "Food and Beverage",
          "Health IT",
          "Health IT",
          "Impact",
          "Impact",
          "Space",
          "Space"
        ],
        "table": {
          "head": {
            "cells": [
              "Company",
              "StageDateRound Size",
              "Total Raised"
            ]
          },
          "body": [
            {
              "cells": [
                "UTVATE",
                "Series ADec 2022$8MSeed RoundMar 2020$5MPre Seed RoundDec 2019$570K",
                "$14M"
              ]
            },
            {
              "cells": [
                "Co-investors: Josh Buckley (Buckley Ventures), Beth Turner (SV Angel), Adrian Fenty (MaC Venture Capital), Robin Vasan (Mango Capital), Jude Gomila (Jude Gomila Rolling Fund), Immad Akhund"
              ]
            },
            {
              "cells": [
                "Valence Discovery",
                "Seed RoundDec 2021$7M",
                "$7M"
              ]
            },
            {
              "cells": [
                "Co-investors: Jonathan Milner"
              ]
            },
            {
              "cells": [
                "Flux",
                "Seed RoundOct 2021$12M",
                "$15M"
              ]
            },
            {
              "cells": [
                "Co-investors: Chris Schaepe (Lightspeed Venture Partners), Lenny Rachitsky (AirAngels), Tom Preston-Werner (Preston-Werner Ventures), Sriram Krishnan (Kearny Jackson), Ellen Levy (Silicon Valley Connect), Sukhinder Singh Cassidy (aCrew Capital), Stephanie Palmeri (NextView Ventures), Mike Dauber (Amplify Partners), Andrew Berman"
              ]
            },
            {
              "cells": [
                "LatchBio",
                "Seed RoundOct 2021$5M",
                "$33M"
              ]
            },
            {
              "cells": [
                "Co-investors: Hemant Taneja (General Catalyst), Brandon Reeves (Lux Capital Management), Brett Wilson (Swift Ventures), Jeremy Fiance (The House Fund)"
              ]
            },
            {
              "cells": [
                "Solugen",
                "Series CSep 2021$350MSeries BMay 2019$32MSeries AOct 2018$19MSeed RoundMar 2017$4.4MPre Seed RoundMar 2017",
                "$440M"
              ]
            },
            {
              "cells": [
                "Co-investors: Brian Singerman (Founders Fund), Joe Montana (Liquid 2 Ventures), Mack Healy (KdT Ventures), Zal Bilimoria (Refactor Capital), Ling Wong (Highbury Group), Arjun Sethi (Tribe Capital), Ed Roman (Hack VC), Susan Hobbs (CrunchFund), Jude Gomila (Jude Gomila Rolling Fund), Ian Rountree (Cantos Ventures), Todd Corenson, Matt Bellamy"
              ]
            },
            {
              "cells": [
                "Atom Computing",
                "Series AJul 2021$15M",
                "$80M"
              ]
            },
            {
              "cells": [
                "Co-investors: Kyle Lui (DCM), Curtis McKee (Third Point Ventures), Dror Berman (Innovation Endeavors), Ian Rountree (Cantos Ventures), Ethan Batraski (Venrock)"
              ]
            },
            {
              "cells": [
                "EARTH AI",
                "Seed RoundAug 2019$1MSeries AAug 2019$2.5M",
                "$8M"
              ]
            },
            {
              "cells": [
                "Co-investors: Ali Tamaseb (DCVC (Data Collective)), Faris Lodin (Sterling Equity), Vishal Harpalani (HyperFund), Luigi Bajetti (LombardStreet Ventures), Kingsley Advani (305 Ventures), Jude Gomila (Jude Gomila Rolling Fund), Ian Rountree (Cantos Ventures), Mathieu Guerville, Kyle Vogt"
              ]
            },
            {
              "cells": [
                "Boundary Layer Technologies",
                "Seed RoundMar 2019$2.3M",
                "$2.3M"
              ]
            },
            {
              "cells": [
                "Co-investors: Kunal Sethi (Prithvi Ventures), Jude Gomila (Jude Gomila Rolling Fund), Ed Roman (Hack VC), Kenneth Ballenegger (Oyster Ventures), Tim Seears"
              ]
            }
          ]
        }
      }
    }
  ]
}
```
</details>


### Pre-Seed
<table>
<thead>
<tr>
<th>label</th>
<th>value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Advertising</td>
<td>top-advertising-pre-seed-investors</td>
</tr>
<tr>
<td>AgTech</td>
<td>top-agtech-pre-seed-investors</td>
</tr>
<tr>
<td>AI</td>
<td>top-ai-pre-seed-investors</td>
</tr>
<tr>
<td>Analytics</td>
<td>top-analytics-pre-seed-investors</td>
</tr>
<tr>
<td>AR/VR</td>
<td>top-ar-vr-pre-seed-investors</td>
</tr>
<tr>
<td>AudioTech</td>
<td>top-audiotech-pre-seed-investors</td>
</tr>
<tr>
<td>AutoTech</td>
<td>top-autotech-pre-seed-investors</td>
</tr>
<tr>
<td>BioTech</td>
<td>top-biotech-pre-seed-investors</td>
</tr>
<tr>
<td>Chemicals</td>
<td>top-chemicals-pre-seed-investors</td>
</tr>
<tr>
<td>ClimateTech/CleanTech</td>
<td>top-climatetech-cleantech-pre-seed-investors</td>
</tr>
<tr>
<td>Cloud Infrastructure</td>
<td>top-cloud-infrastructure-pre-seed-investors</td>
</tr>
<tr>
<td>ConstructionTech</td>
<td>top-constructiontech-pre-seed-investors</td>
</tr>
<tr>
<td>Consumer Health</td>
<td>top-consumer-health-pre-seed-investors</td>
</tr>
<tr>
<td>Consumer Internet</td>
<td>top-consumer-internet-pre-seed-investors</td>
</tr>
<tr>
<td>Cosmetics</td>
<td>top-cosmetics-pre-seed-investors</td>
</tr>
<tr>
<td>Creator/Passion Economy</td>
<td>top-creator-passion-economy-pre-seed-investors</td>
</tr>
<tr>
<td>Cybersecurity</td>
<td>top-cybersecurity-pre-seed-investors</td>
</tr>
<tr>
<td>Data Services</td>
<td>top-data-services-pre-seed-investors</td>
</tr>
<tr>
<td>DeepTech</td>
<td>top-deeptech-pre-seed-investors</td>
</tr>
<tr>
<td>Developer Tools</td>
<td>top-developer-tools-pre-seed-investors</td>
</tr>
<tr>
<td>Diagnostics</td>
<td>top-diagnostics-pre-seed-investors</td>
</tr>
<tr>
<td>Digital Health</td>
<td>top-digital-health-pre-seed-investors</td>
</tr>
<tr>
<td>Direct-to-Consumer (DTC)</td>
<td>top-direct-to-consumer-dtc-pre-seed-investors</td>
</tr>
<tr>
<td>Drug Delivery</td>
<td>top-drug-delivery-pre-seed-investors</td>
</tr>
<tr>
<td>E-commerce</td>
<td>top-e-commerce-pre-seed-investors</td>
</tr>
<tr>
<td>Education</td>
<td>top-education-pre-seed-investors</td>
</tr>
<tr>
<td>EnergyTech</td>
<td>top-energytech-pre-seed-investors</td>
</tr>
<tr>
<td>Enterprise Applications</td>
<td>top-enterprise-applications-pre-seed-investors</td>
</tr>
<tr>
<td>Enterprise Infrastructure</td>
<td>top-enterprise-infrastructure-pre-seed-investors</td>
</tr>
<tr>
<td>Enterprise</td>
<td>top-enterprise-pre-seed-investors</td>
</tr>
<tr>
<td>Entertainment &amp; Sports</td>
<td>top-entertainment-sports-pre-seed-investors</td>
</tr>
<tr>
<td>Fashion</td>
<td>top-fashion-pre-seed-investors</td>
</tr>
<tr>
<td>FinTech</td>
<td>top-fintech-pre-seed-investors</td>
</tr>
<tr>
<td>Food and Beverage</td>
<td>top-food-and-beverage-pre-seed-investors</td>
</tr>
<tr>
<td>Future of Work</td>
<td>top-future-of-work-pre-seed-investors</td>
</tr>
<tr>
<td>Games</td>
<td>top-games-pre-seed-investors</td>
</tr>
<tr>
<td>Gaming/eSports</td>
<td>top-gaming-esports-pre-seed-investors</td>
</tr>
<tr>
<td>Generative Tech/AI</td>
<td>top-generative-tech-pre-seed-investors</td>
</tr>
<tr>
<td>Gig Economy</td>
<td>top-gig-economy-pre-seed-investors</td>
</tr>
<tr>
<td>GovTech</td>
<td>top-govtech-pre-seed-investors</td>
</tr>
<tr>
<td>Hardware</td>
<td>top-hardware-pre-seed-investors</td>
</tr>
<tr>
<td>Health &amp; Hospital Services</td>
<td>top-health-hospital-services-pre-seed-investors</td>
</tr>
<tr>
<td>Health IT</td>
<td>top-health-it-pre-seed-investors</td>
</tr>
<tr>
<td>Human Capital/HRTech</td>
<td>top-human-capital-hrtech-pre-seed-investors</td>
</tr>
<tr>
<td>Impact</td>
<td>top-impact-pre-seed-investors</td>
</tr>
<tr>
<td>Insurance</td>
<td>top-insurance-pre-seed-investors</td>
</tr>
<tr>
<td>IoT</td>
<td>top-iot-pre-seed-investors</td>
</tr>
<tr>
<td>LegalTech</td>
<td>top-legaltech-pre-seed-investors</td>
</tr>
<tr>
<td>Local Services</td>
<td>top-local-services-pre-seed-investors</td>
</tr>
<tr>
<td>Lodging/Hospitality</td>
<td>top-lodging-hospitality-pre-seed-investors</td>
</tr>
<tr>
<td>Logistics</td>
<td>top-logistics-pre-seed-investors</td>
</tr>
<tr>
<td>Manufacturing</td>
<td>top-manufacturing-pre-seed-investors</td>
</tr>
<tr>
<td>MarketingTech</td>
<td>top-marketingtech-pre-seed-investors</td>
</tr>
<tr>
<td>Marketplaces</td>
<td>top-marketplaces-pre-seed-investors</td>
</tr>
<tr>
<td>Material Science</td>
<td>top-material-science-pre-seed-investors</td>
</tr>
<tr>
<td>Media/Content</td>
<td>top-media-content-pre-seed-investors</td>
</tr>
<tr>
<td>Medical Devices</td>
<td>top-medical-devices-pre-seed-investors</td>
</tr>
<tr>
<td>Messaging</td>
<td>top-messaging-pre-seed-investors</td>
</tr>
<tr>
<td>Parenting/Families</td>
<td>top-parenting-families-pre-seed-investors</td>
</tr>
<tr>
<td>Payments</td>
<td>top-payments-pre-seed-investors</td>
</tr>
<tr>
<td>Pharmaceuticals</td>
<td>top-pharmaceuticals-pre-seed-investors</td>
</tr>
<tr>
<td>Real Estate/PropTech</td>
<td>top-real-estate-proptech-pre-seed-investors</td>
</tr>
<tr>
<td>Retail</td>
<td>top-retail-pre-seed-investors</td>
</tr>
<tr>
<td>Robotics</td>
<td>top-robotics-pre-seed-investors</td>
</tr>
<tr>
<td>SaaS</td>
<td>top-saas-pre-seed-investors</td>
</tr>
<tr>
<td>Sales &amp; CRM</td>
<td>top-sales-crm-pre-seed-investors</td>
</tr>
<tr>
<td>Security</td>
<td>top-security-pre-seed-investors</td>
</tr>
<tr>
<td>Semiconductors</td>
<td>top-semiconductors-pre-seed-investors</td>
</tr>
<tr>
<td>Smart Cities/UrbanTech</td>
<td>top-smart-cities-urbantech-pre-seed-investors</td>
</tr>
<tr>
<td>SMB Software</td>
<td>top-smb-software-pre-seed-investors</td>
</tr>
<tr>
<td>Social Commerce</td>
<td>top-social-commerce-pre-seed-investors</td>
</tr>
<tr>
<td>Social Networks</td>
<td>top-social-networks-pre-seed-investors</td>
</tr>
<tr>
<td>Space</td>
<td>top-space-pre-seed-investors</td>
</tr>
<tr>
<td>Supply Chain Tech</td>
<td>top-supply-chain-tech-pre-seed-investors</td>
</tr>
<tr>
<td>Therapeutics</td>
<td>top-therapeutics-pre-seed-investors</td>
</tr>
<tr>
<td>TransportationTech</td>
<td>top-transportationtech-pre-seed-investors</td>
</tr>
<tr>
<td>Travel</td>
<td>top-travel-pre-seed-investors</td>
</tr>
<tr>
<td>Web3/Blockchain</td>
<td>top-web3-blockchain-pre-seed-investors</td>
</tr>
<tr>
<td>Web3/Crypto</td>
<td>top-web3-crypto-pre-seed-investors</td>
</tr>
<tr>
<td>Wellness &amp; Fitness</td>
<td>top-wellness-fitness-pre-seed-investors</td>
</tr>
</tbody>
</table>

### Seed
<table>
<thead>
<tr>
<th>label</th>
<th>value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Advertising</td>
<td>top-advertising-seed-investors</td>
</tr>
<tr>
<td>AgTech</td>
<td>top-agtech-seed-investors</td>
</tr>
<tr>
<td>AI</td>
<td>top-ai-seed-investors</td>
</tr>
<tr>
<td>Analytics</td>
<td>top-analytics-seed-investors</td>
</tr>
<tr>
<td>AR/VR</td>
<td>top-ar-vr-seed-investors</td>
</tr>
<tr>
<td>AudioTech</td>
<td>top-audiotech-seed-investors</td>
</tr>
<tr>
<td>AutoTech</td>
<td>top-autotech-seed-investors</td>
</tr>
<tr>
<td>BioTech</td>
<td>top-biotech-seed-investors</td>
</tr>
<tr>
<td>Chemicals</td>
<td>top-chemicals-seed-investors</td>
</tr>
<tr>
<td>ClimateTech/CleanTech</td>
<td>top-climatetech-cleantech-seed-investors</td>
</tr>
<tr>
<td>Cloud Infrastructure</td>
<td>top-cloud-infrastructure-seed-investors</td>
</tr>
<tr>
<td>ConstructionTech</td>
<td>top-constructiontech-seed-investors</td>
</tr>
<tr>
<td>Consumer Health</td>
<td>top-consumer-health-seed-investors</td>
</tr>
<tr>
<td>Consumer Internet</td>
<td>top-consumer-internet-seed-investors</td>
</tr>
<tr>
<td>Cosmetics</td>
<td>top-cosmetics-seed-investors</td>
</tr>
<tr>
<td>Creator/Passion Economy</td>
<td>top-creator-passion-economy-seed-investors</td>
</tr>
<tr>
<td>Cybersecurity</td>
<td>top-cybersecurity-seed-investors</td>
</tr>
<tr>
<td>Data Services</td>
<td>top-data-services-seed-investors</td>
</tr>
<tr>
<td>DeepTech</td>
<td>top-deeptech-seed-investors</td>
</tr>
<tr>
<td>Developer Tools</td>
<td>top-developer-tools-seed-investors</td>
</tr>
<tr>
<td>Diagnostics</td>
<td>top-diagnostics-seed-investors</td>
</tr>
<tr>
<td>Digital Health</td>
<td>top-digital-health-seed-investors</td>
</tr>
<tr>
<td>Direct-to-Consumer (DTC)</td>
<td>top-direct-to-consumer-dtc-seed-investors</td>
</tr>
<tr>
<td>Drug Delivery</td>
<td>top-drug-delivery-seed-investors</td>
</tr>
<tr>
<td>E-commerce</td>
<td>top-e-commerce-seed-investors</td>
</tr>
<tr>
<td>Education</td>
<td>top-education-seed-investors</td>
</tr>
<tr>
<td>EnergyTech</td>
<td>top-energytech-seed-investors</td>
</tr>
<tr>
<td>Enterprise Applications</td>
<td>top-enterprise-applications-seed-investors</td>
</tr>
<tr>
<td>Enterprise Infrastructure</td>
<td>top-enterprise-infrastructure-seed-investors</td>
</tr>
<tr>
<td>Enterprise</td>
<td>top-enterprise-seed-investors</td>
</tr>
<tr>
<td>Entertainment &amp; Sports</td>
<td>top-entertainment-sports-seed-investors</td>
</tr>
<tr>
<td>Fashion</td>
<td>top-fashion-seed-investors</td>
</tr>
<tr>
<td>FinTech</td>
<td>top-fintech-seed-investors</td>
</tr>
<tr>
<td>Food and Beverage</td>
<td>top-food-and-beverage-seed-investors</td>
</tr>
<tr>
<td>Future of Work</td>
<td>top-future-of-work-seed-investors</td>
</tr>
<tr>
<td>Games</td>
<td>top-games-seed-investors</td>
</tr>
<tr>
<td>Gaming/eSports</td>
<td>top-gaming-esports-seed-investors</td>
</tr>
<tr>
<td>Generative Tech/AI</td>
<td>top-generative-tech-seed-investors</td>
</tr>
<tr>
<td>Gig Economy</td>
<td>top-gig-economy-seed-investors</td>
</tr>
<tr>
<td>GovTech</td>
<td>top-govtech-seed-investors</td>
</tr>
<tr>
<td>Hardware</td>
<td>top-hardware-seed-investors</td>
</tr>
<tr>
<td>Health &amp; Hospital Services</td>
<td>top-health-hospital-services-seed-investors</td>
</tr>
<tr>
<td>Health IT</td>
<td>top-health-it-seed-investors</td>
</tr>
<tr>
<td>Human Capital/HRTech</td>
<td>top-human-capital-hrtech-seed-investors</td>
</tr>
<tr>
<td>Impact</td>
<td>top-impact-seed-investors</td>
</tr>
<tr>
<td>Insurance</td>
<td>top-insurance-seed-investors</td>
</tr>
<tr>
<td>IoT</td>
<td>top-iot-seed-investors</td>
</tr>
<tr>
<td>LegalTech</td>
<td>top-legaltech-seed-investors</td>
</tr>
<tr>
<td>Local Services</td>
<td>top-local-services-seed-investors</td>
</tr>
<tr>
<td>Lodging/Hospitality</td>
<td>top-lodging-hospitality-seed-investors</td>
</tr>
<tr>
<td>Logistics</td>
<td>top-logistics-seed-investors</td>
</tr>
<tr>
<td>Manufacturing</td>
<td>top-manufacturing-seed-investors</td>
</tr>
<tr>
<td>MarketingTech</td>
<td>top-marketingtech-seed-investors</td>
</tr>
<tr>
<td>Marketplaces</td>
<td>top-marketplaces-seed-investors</td>
</tr>
<tr>
<td>Material Science</td>
<td>top-material-science-seed-investors</td>
</tr>
<tr>
<td>Media/Content</td>
<td>top-media-content-seed-investors</td>
</tr>
<tr>
<td>Medical Devices</td>
<td>top-medical-devices-seed-investors</td>
</tr>
<tr>
<td>Messaging</td>
<td>top-messaging-seed-investors</td>
</tr>
<tr>
<td>Parenting/Families</td>
<td>top-parenting-families-seed-investors</td>
</tr>
<tr>
<td>Payments</td>
<td>top-payments-seed-investors</td>
</tr>
<tr>
<td>Pharmaceuticals</td>
<td>top-pharmaceuticals-seed-investors</td>
</tr>
<tr>
<td>Real Estate/PropTech</td>
<td>top-real-estate-proptech-seed-investors</td>
</tr>
<tr>
<td>Retail</td>
<td>top-retail-seed-investors</td>
</tr>
<tr>
<td>Robotics</td>
<td>top-robotics-seed-investors</td>
</tr>
<tr>
<td>SaaS</td>
<td>top-saas-seed-investors</td>
</tr>
<tr>
<td>Sales &amp; CRM</td>
<td>top-sales-crm-seed-investors</td>
</tr>
<tr>
<td>Security</td>
<td>top-security-seed-investors</td>
</tr>
<tr>
<td>Semiconductors</td>
<td>top-semiconductors-seed-investors</td>
</tr>
<tr>
<td>Smart Cities/UrbanTech</td>
<td>top-smart-cities-urbantech-seed-investors</td>
</tr>
<tr>
<td>SMB Software</td>
<td>top-smb-software-seed-investors</td>
</tr>
<tr>
<td>Social Commerce</td>
<td>top-social-commerce-seed-investors</td>
</tr>
<tr>
<td>Social Networks</td>
<td>top-social-networks-seed-investors</td>
</tr>
<tr>
<td>Space</td>
<td>top-space-seed-investors</td>
</tr>
<tr>
<td>Supply Chain Tech</td>
<td>top-supply-chain-tech-seed-investors</td>
</tr>
<tr>
<td>Therapeutics</td>
<td>top-therapeutics-seed-investors</td>
</tr>
<tr>
<td>TransportationTech</td>
<td>top-transportationtech-seed-investors</td>
</tr>
<tr>
<td>Travel</td>
<td>top-travel-seed-investors</td>
</tr>
<tr>
<td>Web3/Blockchain</td>
<td>top-web3-blockchain-seed-investors</td>
</tr>
<tr>
<td>Web3/Crypto</td>
<td>top-web3-crypto-seed-investors</td>
</tr>
<tr>
<td>Wellness &amp; Fitness</td>
<td>top-wellness-fitness-seed-investors</td>
</tr>
</tbody>
</table>

### Seed-A
<table>
<thead>
<tr>
<th>label</th>
<th>value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Advertising</td>
<td>top-advertising-series-a-investors</td>
</tr>
<tr>
<td>AgTech</td>
<td>top-agtech-series-a-investors</td>
</tr>
<tr>
<td>AI</td>
<td>top-ai-series-a-investors</td>
</tr>
<tr>
<td>Analytics</td>
<td>top-analytics-series-a-investors</td>
</tr>
<tr>
<td>AR/VR</td>
<td>top-ar-vr-series-a-investors</td>
</tr>
<tr>
<td>AudioTech</td>
<td>top-audiotech-series-a-investors</td>
</tr>
<tr>
<td>AutoTech</td>
<td>top-autotech-series-a-investors</td>
</tr>
<tr>
<td>BioTech</td>
<td>top-biotech-series-a-investors</td>
</tr>
<tr>
<td>Chemicals</td>
<td>top-chemicals-series-a-investors</td>
</tr>
<tr>
<td>ClimateTech/CleanTech</td>
<td>top-climatetech-cleantech-series-a-investors</td>
</tr>
<tr>
<td>Cloud Infrastructure</td>
<td>top-cloud-infrastructure-series-a-investors</td>
</tr>
<tr>
<td>ConstructionTech</td>
<td>top-constructiontech-series-a-investors</td>
</tr>
<tr>
<td>Consumer Health</td>
<td>top-consumer-health-series-a-investors</td>
</tr>
<tr>
<td>Consumer Internet</td>
<td>top-consumer-internet-series-a-investors</td>
</tr>
<tr>
<td>Cosmetics</td>
<td>top-cosmetics-series-a-investors</td>
</tr>
<tr>
<td>Creator/Passion Economy</td>
<td>top-creator-passion-economy-series-a-investors</td>
</tr>
<tr>
<td>Cybersecurity</td>
<td>top-cybersecurity-series-a-investors</td>
</tr>
<tr>
<td>Data Services</td>
<td>top-data-services-series-a-investors</td>
</tr>
<tr>
<td>DeepTech</td>
<td>top-deeptech-series-a-investors</td>
</tr>
<tr>
<td>Developer Tools</td>
<td>top-developer-tools-series-a-investors</td>
</tr>
<tr>
<td>Diagnostics</td>
<td>top-diagnostics-series-a-investors</td>
</tr>
<tr>
<td>Digital Health</td>
<td>top-digital-health-series-a-investors</td>
</tr>
<tr>
<td>Direct-to-Consumer (DTC)</td>
<td>top-direct-to-consumer-dtc-series-a-investors</td>
</tr>
<tr>
<td>Drug Delivery</td>
<td>top-drug-delivery-series-a-investors</td>
</tr>
<tr>
<td>E-commerce</td>
<td>top-e-commerce-series-a-investors</td>
</tr>
<tr>
<td>Education</td>
<td>top-education-series-a-investors</td>
</tr>
<tr>
<td>EnergyTech</td>
<td>top-energytech-series-a-investors</td>
</tr>
<tr>
<td>Enterprise Applications</td>
<td>top-enterprise-applications-series-a-investors</td>
</tr>
<tr>
<td>Enterprise Infrastructure</td>
<td>top-enterprise-infrastructure-series-a-investors</td>
</tr>
<tr>
<td>Enterprise</td>
<td>top-enterprise-series-a-investors</td>
</tr>
<tr>
<td>Entertainment &amp; Sports</td>
<td>top-entertainment-sports-series-a-investors</td>
</tr>
<tr>
<td>Fashion</td>
<td>top-fashion-series-a-investors</td>
</tr>
<tr>
<td>FinTech</td>
<td>top-fintech-series-a-investors</td>
</tr>
<tr>
<td>Food and Beverage</td>
<td>top-food-and-beverage-series-a-investors</td>
</tr>
<tr>
<td>Future of Work</td>
<td>top-future-of-work-series-a-investors</td>
</tr>
<tr>
<td>Games</td>
<td>top-games-series-a-investors</td>
</tr>
<tr>
<td>Gaming/eSports</td>
<td>top-gaming-esports-series-a-investors</td>
</tr>
<tr>
<td>Generative Tech/AI</td>
<td>top-generative-tech-series-a-investors</td>
</tr>
<tr>
<td>Gig Economy</td>
<td>top-gig-economy-series-a-investors</td>
</tr>
<tr>
<td>GovTech</td>
<td>top-govtech-series-a-investors</td>
</tr>
<tr>
<td>Hardware</td>
<td>top-hardware-series-a-investors</td>
</tr>
<tr>
<td>Health &amp; Hospital Services</td>
<td>top-health-hospital-services-series-a-investors</td>
</tr>
<tr>
<td>Health IT</td>
<td>top-health-it-series-a-investors</td>
</tr>
<tr>
<td>Human Capital/HRTech</td>
<td>top-human-capital-hrtech-series-a-investors</td>
</tr>
<tr>
<td>Impact</td>
<td>top-impact-series-a-investors</td>
</tr>
<tr>
<td>Insurance</td>
<td>top-insurance-series-a-investors</td>
</tr>
<tr>
<td>IoT</td>
<td>top-iot-series-a-investors</td>
</tr>
<tr>
<td>LegalTech</td>
<td>top-legaltech-series-a-investors</td>
</tr>
<tr>
<td>Local Services</td>
<td>top-local-services-series-a-investors</td>
</tr>
<tr>
<td>Lodging/Hospitality</td>
<td>top-lodging-hospitality-series-a-investors</td>
</tr>
<tr>
<td>Logistics</td>
<td>top-logistics-series_a-investors</td>
</tr>
<tr>
<td>Manufacturing</td>
<td>top-manufacturing-series_a-investors</td>
</tr>
<tr>
<td>MarketingTech</td>
<td>top-marketingtech-series-a-investors</td>
</tr>
<tr>
<td>Marketplaces</td>
<td>top-marketplaces-series-a-investors</td>
</tr>
<tr>
<td>Material Science</td>
<td>top-material-science-series-a-investors</td>
</tr>
<tr>
<td>Media/Content</td>
<td>top-media-content-series-a-investors</td>
</tr>
<tr>
<td>Medical Devices</td>
<td>top-medical-devices-series-a-investors</td>
</tr>
<tr>
<td>Messaging</td>
<td>top-messaging-series-a-investors</td>
</tr>
<tr>
<td>Parenting/Families</td>
<td>top-parenting-families-series-a-investors</td>
</tr>
<tr>
<td>Payments</td>
<td>top-payments-series-a-investors</td>
</tr>
<tr>
<td>Pharmaceuticals</td>
<td>top-pharmaceuticals-series-a-investors</td>
</tr>
<tr>
<td>Real Estate/PropTech</td>
<td>top-real-estate-proptech-series-a-investors</td>
</tr>
<tr>
<td>Retail</td>
<td>top-retail-series-a-investors</td>
</tr>
<tr>
<td>Robotics</td>
<td>top-robotics-series-a-investors</td>
</tr>
<tr>
<td>SaaS</td>
<td>top-saas-series-a-investors</td>
</tr>
<tr>
<td>Sales &amp; CRM</td>
<td>top-sales-crm-series-a-investors</td>
</tr>
<tr>
<td>Security</td>
<td>top-security-series-a-investors</td>
</tr>
<tr>
<td>Semiconductors</td>
<td>top-semiconductors-series-a-investors</td>
</tr>
<tr>
<td>Smart Cities/UrbanTech</td>
<td>top-smart-cities-urbantech-series-a-investors</td>
</tr>
<tr>
<td>SMB Software</td>
<td>top-smb-software-series-a-investors</td>
</tr>
<tr>
<td>Social Commerce</td>
<td>top-social-commerce-series-a-investors</td>
</tr>
<tr>
<td>Social Networks</td>
<td>top-social-networks-series-a-investors</td>
</tr>
<tr>
<td>Space</td>
<td>top-space-series_a-investors</td>
</tr>
<tr>
<td>Supply Chain Tech</td>
<td>top-supply-chain-tech-series-a-investors</td>
</tr>
<tr>
<td>Therapeutics</td>
<td>top-therapeutics-series-a-investors</td>
</tr>
<tr>
<td>TransportationTech</td>
<td>top-transportationtech-series-a-investors</td>
</tr>
<tr>
<td>Travel</td>
<td>top-travel-series-a-investors</td>
</tr>
<tr>
<td>Web3/Blockchain</td>
<td>top-web3-blockchain-series-a-investors</td>
</tr>
<tr>
<td>Web3/Crypto</td>
<td>top-web3-crypto-series-a-investors</td>
</tr>
<tr>
<td>Wellness &amp; Fitness</td>
<td>top-wellness-fitness-series-a-investors</td>
</tr>
</tbody>
</table>


## `getFirms(id: string)`

```typescript
(async () => {
  const response = await getFirms("01-advisors");
})();
```

## JSON example
<details>
  <summary>json</summary>

```json
{
  "name": "Adam Bain",
  "name_id": "adam-bain",
  "info": {
    "avatar": "https://signal-api.nfx.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMlNnQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c2e00e8db4d999fe7dec2d51577d90350ba5c81e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2hxY0djNkUzSmxjMmw2WlY5MGIxOW1hV3hzV3dkcEFsZ0NhUUpZQWc9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--f8e22238db523e6e5e5a8ae643921849c4b207bd/0?d=160x160",
    "label_1": "01 Advisors",
    "label_2": "Managing Partner"
  },
  "sweet_spot": {
    "label": "Sweet spot:",
    "value": "$10.0M"
  },
  "investment_location": "Investors in SF Bay Area (CA)",
  "profile": [
    {
      "investor_profile": {
        "person": {
          "name": "Adam Bain",
          "roles": [
            "Investor",
            "VC",
            "Operator"
          ],
          "url": "https://01a.com",
          "social_network": [
            {
              "domain": "01a",
              "url": "https://www.01a.com/"
            },
            {
              "domain": "linkedin",
              "url": "https://www.linkedin.com/in/adambain/"
            },
            {
              "domain": "twitter",
              "url": "https://www.twitter.com/adambain"
            },
            {
              "domain": "crunchbase",
              "url": "https://www.crunchbase.com/person/adam-bain"
            }
          ]
        },
        "headline": "Co-Founder &amp; Managing Partner at 01 Adivsors",
        "location": {
          "display_name": "Mill Valley, California"
        },
        "investment_on_record": "28",
        "current_fund_size": null,
        "sector_stage_rankings": [
          "Adam Bain",
          "Consumer Internet",
          "Consumer Internet",
          "Enterprise",
          "Enterprise",
          "SaaS",
          "SaaS"
        ],
        "table": {
          "head": {
            "cells": [
              "Company",
              "StageDateRound Size",
              "Total Raised"
            ]
          },
          "body": [
            {
              "cells": [
                "Bloomreach",
                "Debt FinancingOct 2022$30M",
                "$300M"
              ]
            },
            {
              "cells": [
                "Co-investors: Ajay Agarwal (Bain Capital Ventures), Scott Sandell (New Enterprise Associates (NEA)), Chris Dixon (Andreessen Horowitz), Alfred Chuang (Race Capital)"
              ]
            },
            {
              "cells": [
                "Pixel Vault",
                "Series AFeb 2022$100M",
                "$100M"
              ]
            },
            {
              "cells": [
                "Tipalti",
                "Series FDec 2021$270MSeries EOct 2020$150MSeries DSep 2019$76M",
                "$500M"
              ]
            },
            {
              "cells": [
                "Co-investors: Dick Costolo (01 Advisors), Nadav Eylath (at.inc/)"
              ]
            },
            {
              "cells": [
                "Mythical Games",
                "Series CNov 2021$150MSeries BJun 2021$75M",
                "$410M"
              ]
            },
            {
              "cells": [
                "Co-investors: Arianna Simpson (Andreessen Horowitz), Amos Ben-Meir (Sand Hill Angels), Alan Leong (Sand Hill Angels), Sam Englebardt (Galaxy Digital), Chris Sklarin (Alumni Ventures Group), Gregory Baker (Bascom Ventures), Anton Simunovic (Alumni Ventures Group), Tom Meyer (Alumni Ventures Group), Alex Gurevich (Javelin Venture Partners), Ryan Tedder"
              ]
            },
            {
              "cells": [
                "HiveWatch",
                "Series AOct 2021$20M",
                "$20M"
              ]
            },
            {
              "cells": [
                "Co-investors: Dick Costolo (01 Advisors), Lachy Groom (LGF)"
              ]
            },
            {
              "cells": [
                "Electric",
                "Series DOct 2021$90MSeries BMar 2020$15M",
                "$180M"
              ]
            },
            {
              "cells": [
                "Co-investors: Jeff Richards (GGV Capital), Mike Brown Jr (Bowery Capital), Bob Goodman (Bessemer Venture Partners), Namek T. Zu'bi (Silicon Badia), Brad Svrluga (Primary Venture Partners), Dan Teran (Gutter Capital), Laurel Touby (Supernode Ventures), Brett Martin (Charge Ventures), Scott Hartley (Two Culture Capital), Gavin Baker (Atreides Management), Dick Costolo (01 Advisors)"
              ]
            },
            {
              "cells": [
                "Loop",
                "Series ASep 2021$21M",
                "$110M"
              ]
            },
            {
              "cells": [
                "Co-investors: Dave Samuel (Freestyle Capital), Peter Gajdoš (Fifth Wall), John Luttig (Founders Fund), Nasir Jones (QueensBridge Venture Partners), Brian Bell (Team Ignite Ventures), Songe LaRon (The Community Fund), Steve Schlafman, Mark Pincus"
              ]
            },
            {
              "cells": [
                "Origin",
                "Series BAug 2021$56M",
                "$97M"
              ]
            },
            {
              "cells": [
                "Co-investors: Niki Pezeshki (Felicis Ventures), Mike Maples (Floodgate), Joe Montana (Liquid 2 Ventures), Jason Krikorian (DCM), Chris Adelsbach (Outrun Ventures), Nicolas Sauvage (TDK Ventures), Mey Cezairli (Project A), Dick Costolo (01 Advisors), Pascal Levy-Garboua (Long Journey Ventures), Sean Dempsey (Merus Capital), Ryan Orr"
              ]
            }
          ]
        }
      }
    }
  ]
}
```
</details>

### Firms 

| id                                   |
| ------------------------------------- |
| 01-advisors                           |
| 01-ventures                           |
| 040-capital                           |
| 100x-vc                               |
| 10100-vc                              |
| 10k-ventures                          |
| 10xers-fund                           |
| 10x-group                             |
| 10x-investor-club                     |
| 1-1-capital                           |
| 1up-ventures                          |
| 2050-capital                          |
| 2xn                                   |
| 3pel-ventures                         |
| 44-ventures                           |
| 4ward-vc                              |
| 500-startups                          |
| 500-startups-latam                    |
| 50-partners                           |
| 50-partners-impact                    |
| 5-star-capital                        |
| 645-ventures                          |
| 7feur-ventures                        |
| 7percent-ventures                     |
| 8090-industries                       |
| 840-venture-partners                  |
| 8-bit-capital                         |
| 8vc                                   |
| aaf-management-ltd                    |
| a-star-capital                        |
| acario                                |
| ace-aceleratech                       |
| aceleralatam                          |
| acequia-capital                       |
| actai-ventures                        |
| ada-ventures                          |
| addition                              |
| adjacent                              |
| advancit-capital                      |
| aenu                                  |
| afterdox                              |
| afterwork-ventures                    |
| ag-startup-engine                     |
| ai-fund                               |
| aimores-investments                   |
| ai-operators-fund                     |
| airangels                             |
| air-street-capital                    |
| airtree-ventures                      |
| aisprouts-vc                          |
| akaris-global-partners                |
| alaya-capital-partners                |
| alex-angels-alexandria-angel-network  |
| allegory                              |
| alliance-of-angels                    |
| allievo-capital                       |
| all-iron-ventures                     |
| alma-angels                           |
| alumni-ventures-group                 |
| amasia                                |
| american-family-ventures              |
| america-s-frontier-fund               |
| amplo                                 |
| amritam-holdings                      |
| amtech-partners                       |
| anamcara-capital                      |
| andreessen-horowitz                   |
| anexo                                 |
| angeldesk                             |
| angel-investments                     |
| angel-investor                        |
| angellist-syndicator                  |
| hashtag-angels                        |
| angels-of-many                        |
| angel-ventures-mexico                 |
| antartica-ventures                    |
| anthemis-group                        |
| antler                                |
| apollo-projects                       |
| arceau                                |
| ascend-ventures                       |
| ascension-ventures                    |
| asta-academy                          |
| astella-investments                   |
| astel-ventures                        |
| aster-capital                         |
| asymmetric                            |
| athenian-capital                      |
| atlanta-technology-angels             |
| atlantica-ventures                    |
| atlantic-labs                         |
| atlantico-partners-sao-paulo          |
| atomico                               |
| atoms                                 |
| at-one-ventures                       |
| atria-ventures                        |
| audacity                              |
| audacity-venture-capital              |
| audrey-capital                        |
| august-capital                        |
| aug-x-labs                            |
| autotech-ventures                     |
| av8-ventures                          |
| avalanche-vc                          |
| aviso-ventures                        |
| awesome-ventures                      |
| axeleo-capital                        |
| a-z-angels                            |
| az-vc                                 |
| b2                                    |
| babel-ventures                        |
| bain-capital-ventures                 |
| baker-hall-capital                    |
| balderton-capital                     |
| ballistic-ventures                    |
| bam-ventures                          |
| bastille-ventures                     |
| battery-ventures                      |
| baukunst                              |
| bbg-ventures                          |
| b-capital-group                       |
| bcf-ventures                          |
| beacon-capital                        |
| beckley-waves                         |
| behold-ventures                       |
| belal-badat-ventures                  |
| benchmark                             |
| ben-taft-s-genius-ventures            |
| berkeley-angel-network                |
| betaworks-ventures                    |
| better-tomorrow-ventures              |
| better-ventures                       |
| big-cheese-ventures                   |
| big-idea-ventures                     |
| binance-labs                          |
| bitkraft-ventures                     |
| black-angel-group                     |
| blackbird-ventures                    |
| black-opal-ventures                   |
| blacktech-capital                     |
| bling-capital                         |
| blockchain-capital                    |
| blocklabs-capital-management          |
| bloc-ventures                         |
| bloomberg-beta                        |
| blue-air-ventures                     |
| bluerun-ventures                      |
| blue-startups                         |
| blumberg-capital                      |
| blume-ventures                        |
| bold-capital-partners                 |
| boldstart-ventures                    |
| bolster-ventures                      |
| bonfire-ventures                      |
| boost-vc                              |
| boston-harbor-angels                  |
| bread-and-butter-ventures             |
| breakthrough-energy-ventures          |
| brick-and-mortar-ventures             |
| brickyard                             |
| bridge-latam                          |
| bright-growth                         |
| brkfst-club                           |
| broadstone                            |
| browder-capital                       |
| bt-growth-capital                     |
| buckley-ventures                      |
| builders-vc                           |
| bullpen-capital                       |
| byld-ventures                         |
| cacao-capital-vc                      |
| calendula-ventures                    |
| california-innovation-fund            |
| camber-creek                          |
| cambrian-ventures                     |
| canary                                |
| canvas-ventures                       |
| capitalg                              |
| captjur-connect                       |
| carrick-capital-partners              |
| carya-venture-partners                |
| catapult-capital                      |
| centre-street-partners                |
| cerulean-ventures                     |
| cervin-ventures                       |
| chain-reaction                        |
| chang-corporation                     |
| chasing-rainbows                      |
| cherry-ventures                       |
| cherubic-ventures                     |
| chileglobal-ventures                  |
| cincy-tech                            |
| citypark-investments                  |
| clean-energy-ventures                 |
| climactic                             |
| climate-capital                       |
| coalition-operators                   |
| cofounderzone                         |
| cofound-partners                      |
| collide-capital                       |
| composite-ventures                    |
| compound                              |
| concept-ventures                      |
| concrete-vc                           |
| conexo-ventures                       |
| connection-silicon-valley             |
| convective-capital                    |
| convergence-partners-ag               |
| conviction-partners                   |
| conviction-vc                         |
| convoi-ventures                       |
| cool-climate-collective               |
| coral-coral-defi                      |
| corazon-capital                       |
| coreangels                            |
| cornerstone-venture-partners          |
| costanoa-ventures                     |
| covariant                             |
| cowboy-ventures                       |
| cracks-fund                           |
| cradlex                               |
| craft-ventures                        |
| crane-venture-partners                |
| creame-incubadora-de-empresas         |
| criabiz-ventures                      |
| crossbeam-venture-partners            |
| crosscut-ventures                     |
| crv                                   |
| cryptohq-fund                         |
| curiosity-vc                          |
| c-ventures                            |
| cvx-ventures                          |
| cyberstarts-vc                        |
| darco-capital                         |
| data-tech-fund                        |
| dawn-capital                          |
| day-one-ventures                      |
| data-collective                       |
| decibel-partners                      |
| deepbridge-capital                    |
| defense-angels                        |
| defy-partners                         |
| dell-technologies-capital             |
| denver-angels                         |
| depo-ventures                         |
| designer-fund                         |
| destination-accelerator               |
| devlabs                               |
| d-f-a-capital                         |
| dfj                                   |
| diez-ventures-inc                     |
| dis-capital                           |
| dispersion-capital                    |
| divergent-investments                 |
| diversity-x-1                         |
| dmv-capital                           |
| dn-capital                            |
| domo-invest                           |
| dorm-room-fund                        |
| double-down                           |
| draper-associates                     |
| dream-funded                          |
| dreamit-ventures                      |
| dream-maker-ventures                  |
| dst-global                            |
| dweb3-capital                         |
| early-game-ventures                   |
| early-light-ventures                  |
| edtech-booster-capital                |
| ehukai-investments                    |
| elbow-beach-capital                   |
| electric-capital                      |
| emad-hasan                            |
| embedded-capital                      |
| emergence-capital                     |
| emphasis-ventures-emvc                |
| end-partners                          |
| endpoint-ventures                     |
| ensemble-vc                           |
| entain-group-plc                      |
| eqt-ventures                          |
| equihack-ventures                     |
| eseed                                 |
| esh-vc                                |
| ethos-vc                              |
| eucrates-biomedical-acquisition-corp  |
| eunoia-capital-partners               |
| evening-fund                          |
| evolution-equity-partners             |
| exceptional-ventures                  |
| expedite-ventures                     |
| expert-dojo                           |
| extantia-capital                      |
| facebook                              |
| factor-capital                        |
| family-office                         |
| f-a-muhsen-capital                    |
| far-out-ventures                      |
| farpoint                              |
| fastercapital                         |
| fea-angels                            |
| felicis-ventures                      |
| felix-capital                         |
| fellows-fund                          |
| ferguson-ventures                     |
| ff-venture-capital                    |
| fhe-ventures-feluma-ventures          |
| fidi-ventures                         |
| fifth-wall                            |
| filkor-capital                        |
| finch-capital                         |
| finsight-ventures                     |
| fintop-capital                        |
| fireside-ventures                     |
| first-bight-ventures                  |
| firsthand-alliance                    |
| firstmark-capital                     |
| firstminute-capital                   |
| first-round-capital                   |
| fj-labs                               |
| floodgate                             |
| florida-funders                       |
| flucas-ventures                       |
| fluidtheory                           |
| forerunner-ventures                   |
| fort-ross-ventures                    |
| forum-ventures                        |
| foundation-capital                    |
| founder-collective                    |
| founder-institute                     |
| founderpartners                       |
| founders-circle-capital               |
| founders-fund                         |
| framework-venture-partners            |
| freestyle-capital                     |
| frontier-path-vc                      |
| fstage-vc                             |
| fuel-capital                          |
| fuel-ventures                         |
| full-flight-ventures                  |
| fundamental-labs                      |
| fundamentum                           |
| funders-club                          |
| fund-fellow-founders                  |
| fuse-venture-partners                 |
| fusion-fund                           |
| future-africa                         |
| future-ventures                       |
| g20-ventures                          |
| g2-capital                            |
| game-seer-venture-partners            |
| ganas-ventures                        |
| garden-district-ventures              |
| gener8tor                             |
| general-catalyst                      |
| genesis-vc                            |
| genesis-ventures                      |
| ggv-capital                           |
| giant-step-capital                    |
| gigascale-capital                     |
| git1k                                 |
| glade-brook                           |
| glasswing                             |
| glilot-capital-partners               |
| global-founders-capital               |
| goat-capital                          |
| goldman-sachs                         |
| goldstreet-venture-capital            |
| goodwater-capital                     |
| gorilla-capital                       |
| gradient-ventures                     |
| graphite-ventures                     |
| graph-ventures                        |
| gravity-fund                          |
| greylock                              |
| grey-silo-ventures                    |
| griffin-gaming-partners               |
| group-11                              |
| gsd-venture-studios                   |
| gsv-ventures                          |
| guerrilla-capital                     |
| gutter-capital                        |
| gv                                    |
| habico-invest                         |
| hambro-perks                          |
| e-ventures                            |
| heartcore-capital                     |
| helion-venture-partners               |
| hg-ventures                           |
| hoaq                                  |
| hof-capital                           |
| honda-innovations                     |
| honey-island-capital                  |
| houghton-street-ventures              |
| hoxton-ventures                       |
| hudson-valley-startup-fund            |
| hustle-fund                           |
| hyphacapital                          |
| hyphen-capital                        |
| icon                                  |
| ifg-vc                                |
| igaming-ideas                         |
| igvc                                  |
| illuminate-ventures                   |
| iluminar-ventures                     |
| immeasurable                          |
| impacta-vc                            |
| impact-fundry                         |
| impact-vc                             |
| inba-shenfeld-holdings                |
| incisive-ventures                     |
| include-venture-partners              |
| independent                           |
| index-ventures                        |
| indicator-ventures                    |
| inertia-ventures                      |
| innospark-ventures                    |
| innovation-endeavors                  |
| innovent-capital-group                |
| int3                                  |
| interlock-capital                     |
| international-accelerator             |
| interplay-ventures                    |
| ivp-institutional-venture-partners    |
| jamjar-investments                    |
| jaza-rift-ventures                    |
| jazz-venture-partners                 |
| jelix-ventures                        |
| jetblue-technology-ventures           |
| jlabs                                 |
| jude-gomila-rolling-fund              |
| jungle-ventures                       |
| juniper-networks                      |
| kalytix-ventures                      |
| kearny-jackson                        |
| keyhole-advisory-llc                  |
| kindred-ventures                      |
| kli-capital                           |
| kohfounders                           |
| krm-interests-llc                     |
| kw-angel-fund                         |
| l1-digital                            |
| la-famiglia                           |
| lakestar                              |
| lanai                                 |
| latin-leap                            |
| l-attitude-ventures                   |
| launchpad-venture-group               |
| l-catterton-growth                    |
| leia-capital                          |
| lewga                                 |
| liberty-media                         |
| ligature                              |
| lightning-ventures                    |
| lightspeed-venture-partners           |
| lionheart-ventures                    |
| listen                                |
| living-on-the-edge-aka-lote-capital   |
| lofty-ventures                        |
| lombardstreet-ventures                |
| long-journey-ventures                 |
| longtail-ventures                     |
| looking-glass-capital                 |
| look-up-ventures                      |
| lowercarbon-capital                   |
| ludis-capital                         |
| ludlow-ventures                       |
| lunar-ventures                        |
| luno-expeditions                      |
| lux-capital                           |
| lventure-group                        |
| lvlup-ventures                        |
| m31-capital                           |
| madrona-venture-labs                  |
| magic                                 |
| magnivia-ventures                     |
| main-sequence-ventures                |
| malaika-ventures                      |
| malpani-ventures                      |
| mangrove-capital-partners             |
| manhattan-west                        |
| maple-vc                              |
| march-capital-partners                |
| markd-vc                              |
| mark-ventures                         |
| maru-summit                           |
| massmutual-ventures                   |
| masterkey-vc                          |
| matrix-partners-china                 |
| matthew-brown-companies               |
| maverick-capital                      |
| max-ventures                          |
| maya-capital                          |
| mayfield                              |
| mechanism-capital                     |
| menara-ventures                       |
| mendoza-ventures                      |
| menlo-ventures                        |
| merak-ventures                        |
| mettle-fund                           |
| miami-angels                          |
| michael-peres                         |
| mindset-ventures                      |
| miramar-ventures                      |
| mir-ventures                          |
| mizmaa-ventures                       |
| mkt1-capital                          |
| molly-knappen                         |
| molten-ventures                       |
| monte-carlo-capital                   |
| moso-capital                          |
| motier-ventures                       |
| motivate-ventures                     |
| moxxie-ventures                       |
| msm                                   |
| msw-capital                           |
| mudita-venture-partners               |
| multicoin-capital                     |
| mu-ventures                           |
| neo                                   |
| nes-tech                              |
| network                               |
| network-vc                            |
| neu-venture-capital                   |
| new-age-capital                       |
| new-age-ventures                      |
| new-enterprise-associates             |
| new-leaf-invest                       |
| newtopia-vc                           |
| newtype-ventures                      |
| new-york-angels                       |
| new-york-venture-partners             |
| next-frontier-capital                 |
| nextgen-venture-partners              |
| nextview-ventures                     |
| next-wave-impact                      |
| nfx                                   |
| nielsen-innovate                      |
| night-capital                         |
| nimbus-synergies                      |
| niu-ventures                          |
| niya-partners                         |
| no-deposit-no-return                  |
| norte-ventures                        |
| notation-capital                      |
| nxtp-labs                             |
| obscura                               |
| oca-ventures                          |
| offline-ventures                      |
| on-deck                               |
| onx-capital                           |
| op-crypto                             |
| opencapital-vc                        |
| operate                               |
| operator-collective                   |
| operator-ventures                     |
| orama-ventures                        |
| orange-collective                     |
| osbon-capital-management              |
| otherwise-fund                        |
| ourcrowd                              |
| outbound-capital                      |
| outlander-labs                        |
| outliers-capital                      |
| outlier-ventures                      |
| outrun-ventures                       |
| outsized-ventures                     |
| oval-park-capital                     |
| oval-ventures                         |
| oventures                             |
| overlooked-ventures                   |
| ovo-fund                              |
| oxford-angel-fund                     |
| p10x-ventures                         |
| pact-vc                               |
| page56-capital                        |
| palo-santo-vc                         |
| pantera-capital                       |
| paradigm                              |
| pareto-holdings                       |
| partech-ventures                      |
| patron                                |
| peabody-capital-group                 |
| pear-vc                               |
| pebblebed                             |
| pegasus-tech-ventures                 |
| pelion-venture-partners               |
| pepper-ventures                       |
| perkins-coie                          |
| phenomenal-ventures                   |
| phoenix-fund                          |
| phystech-ventures                     |
| picus-capital                         |
| pillar-vc                             |
| pinto-ventures                        |
| pioneer-fund                          |
| platinum-software-development-company |
| playfair-capital                      |
| plexo-capital                         |
| plug-and-play-ventures                |
| pnina-international                   |
| point72-ventures                      |
| point-nine-capital                    |
| polychain-capital                     |
| portage-ventures                      |
| portal-ventures                       |
| powerhouse-ventures                   |
| prabhakar-ventures                    |
| practical-venture-capital             |
| predictive-vc                         |
| preface-ventures                      |
| presight-capital                      |
| prithvi-ventures                      |
| privilege-ventures                    |
| promus-ventures                       |
| proof-group                           |
| propeller-vc                          |
| punch-capital                         |
| pvcp                                  |
| quiet-capital                         |
| race-capital                          |
| rackhouse-venture-capital             |
| radical-ventures                      |
| radicle-ventures                      |
| radix-innovation-capital              |
| rali_cap                              |
| rebel-fund                            |
| recharged-partners                    |
| recruit-strategic-partners            |
| redalpine-venture-partners            |
| redpoint-eventures                    |
| redpoint-ventures                     |
| regen-ventures                        |
| reinforced-ventures                   |
| remus-capital                         |
| renegade-capital                      |
| republic                              |
| resolute-ventures                     |
| responsibly-ventures                  |
| ret-ventures                          |
| revel-partners                        |
| revolution                            |
| revolution-growth                     |
| revolution-ventures                   |
| revroad-capital                       |
| rezilyent-capital                     |
| ribbit-capital                        |
| ride-ventures                         |
| ridge-ventures                        |
| right-side-capital-management         |
| robot-ventures                        |
| rocketship-vc                         |
| rock-health                           |
| rock-yard-ventures                    |
| roosh-ventures                        |
| root-ventures                         |
| rtp-global                            |
| s28-capital                           |
| s3-ventures                           |
| saasholic-fund                        |
| saints-capital                        |
| saltagen-ventures                     |
| sand-hill-angels                      |
| satgana                               |
| scheinman-angel-fund                  |
| schox-venture-capital                 |
| scifi-vc                              |
| scribble-ventures                     |
| scx-holdings                          |
| seaside-ventures                      |
| seaya-ventures                        |
| secret-chord-ventures                 |
| sector-7                              |
| seed-club-ventures                    |
| seed-round-capital                    |
| seedstars                             |
| sequoia-capital                       |
| sequoia-capital-china                 |
| sequoia-capital-india                 |
| seraphim-space                        |
| shaan-s-all-access-fund               |
| shilling-capital                      |
| shima-capital                         |
| shine-capital                         |
| shorea-ventures                       |
| shunwei-capital                       |
| side-stage-ventures                   |
| sif-ventures-uk                       |
| signal-peak-ventures                  |
| signia-venture-partners               |
| silence                               |
| silicon-badia                         |
| silicon-beach-investment-group        |
| silicon-valley-connect                |
| silvercircle                          |
| singh-capital-partners                |
| skl-vc                                |
| skycatcher-fund                       |
| skyview-capital                       |
| smart-money-ventures                  |
| softbank-investment-advisers          |
| sol-fund                              |
| sommet-ab                             |
| sony-innovation-fund                  |
| sosv                                  |
| spacecadet                            |
| spark-capital                         |
| speedinvest                           |
| spice-capital                         |
| spintop-ventures                      |
| spring-activator                      |
| springboard-health-angels             |
| square-peg-capital                    |
| srb-ventures                          |
| sridesign                             |
| starburst-ventures                    |
| started-edtech-week                   |
| startup-bucks                         |
| startupgym                            |
| startup-ignition-ventures             |
| startup-wise-guys                     |
| state-farm                            |
| sterling-equity                       |
| strange-brew-ventures-llc             |
| stride-vc                             |
| struck-capital                        |
| summit-partners                       |
| sunset-ventures                       |
| super-capital-vc                      |
| supreme-factory                       |
| sv-angel                              |
| sv-venture-group                      |
| swan-venture-fund                     |
| sweater-ventures                      |
| symbolic-capital                      |
| synaptic-ventures                     |
| syndicateroom                         |
| tau-ventures                          |
| tbd-angels                            |
| tcg                                   |
| team-ignite-ventures                  |
| techne-infiniti-ventures              |
| techstars                             |
| telegraph-hill-capital                |
| telegraph-hill-partners               |
| texkap-equity-investments             |
| the-81-collection                     |
| the-chennai-angels                    |
| the-community-fund                    |
| the-engine                            |
| the-family-fund                       |
| the-fintech-fund                      |
| the-general-partnership               |
| the-helm                              |
| the-mba-fund                          |
| theory-ventures                       |
| the-venture-collective-tvc            |
| think-colorado                        |
| third-rock-ventures                   |
| thirty-five-ventures                  |
| thomvest-ventures                     |
| thrive-capital                        |
| tiger-global-management               |
| time-bioventures                      |
| tmt-investments                       |
| tmv                                   |
| tmw-capital                           |
| todd-and-rahul-angel-fund             |
| token-amigo                           |
| top-harvest-capital                   |
| tq-ventures                           |
| transcend-fund                        |
| trebuchet-partners                    |
| triatomic-capital                     |
| tribe-capital                         |
| trolley-venture-partners              |
| true-ventures                         |
| type-one-ventures                     |
| ul-ventures                           |
| umami-capital                         |
| unconventional-ventures               |
| underdog-labs                         |
| unearth                               |
| union-labs                            |
| union-square-ventures                 |
| unovis-asset-management               |
| unruly-capital                        |
| uphonest-capital                      |
| upload-ventures                       |
| urbanist-ventures                     |
| u-s-department-of-defense             |
| v3ntures                              |
| vala-capital                          |
| valar-ventures                        |
| valhalla-capital                      |
| valley-capital-partners               |
| valutia                               |
| vamos-ventures                        |
| variant                               |
| various                               |
| vast-ventures                         |
| venrock                               |
| ventiur-aceleradora                   |
| venture-development-partners          |
| venturesouth                          |
| venture-university                    |
| vera-equity                           |
| veritas-capital                       |
| version-one-ventures                  |
| vibranium-vc                          |
| vickers-venture-partners              |
| victress-capital                      |
| village-global                        |
| vintage-investment-partners           |
| visible-hands                         |
| vitalize-venture-group                |
| vita-vera-ventures                    |
| vivek-sodera-ventures                 |
| voyager-ventures                      |
| vsc-ventures                          |
| vu-venture-partners                   |
| warwicktech                           |
| webtalk-ltd                           |
| weekend-fund                          |
| westchester-angels                    |
| westriver-group                       |
| whale-one                             |
| what-if-ventures                      |
| wilmington-investor-network           |
| winning-together-fund                 |
| wolfpack-investor-network             |
| wollef-ventures                       |
| work-life-ventures                    |
| world-fund                            |
| xange                                 |
| x-factor-ventures                     |
| xploration-capital                    |
| xrc-labs                              |
| xseed-capital                         |
| xtx-ventures                          |
| xx                                    |
| y-combinator                          |
| yellowrocks-vc                        |
| zaka-ventures                         |
| zedcrest-capital                      |
| zkp                                   |
| znzinvestor-corp                      |


## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---

### **:robot: Author**

_*Chris M. Perez*_

> You can follow me on
> [github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright ©2023 [signal.nfx](https://github.com/ChrisMichaelPerezSantiago/signal.nfx).
