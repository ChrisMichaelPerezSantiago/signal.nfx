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
