import americaLeadershipForum from "./../assets/images/america-leadership-forum.webp";
import boardCertified from "./../assets/images/board-certified.webp";
import courtTV from "./../assets/images/court-tv.webp";
import houston from "./../assets/images/houstin.webp";
import nationalAssociationOfLawyers from "./../assets/images/national-association-of-lawyers.webp";
import random from "./../assets/images/random.webp";
import superLawyers from "./../assets/images/superlawyers.webp";
import texasBarCollege from "./../assets/images/texas-bar-college.webp";
import texasCriminalDefenseLawyers from "./../assets/images/texas-criminal-defense-lawyers-association.webp";
import topAttorneyDefense from "./../assets/images/top-atourney-defense.webp";

import bank from "./../assets/images/bank.png";
import business from "./../assets/images/cooperation.png";
import accident from "./../assets/images/car-crash.png";
import health from "./../assets/images/cardiogram.png";
import criminal from "./../assets/images/mugshot.png";
import family from "./../assets/images/family-silhouette.png";
import capital from "./../assets/images/capital.png";
import agreement from "./../assets/images/agreement.png";

const PRACTICE_AREAS = [
    {
        image: bank,
        title: 'Bank & Financial Law',
        description: 'Antitrust and competition laws around the world are rapidly evolving and companies face new risks and challenges in keeping up with the complex and changing rules'
    },
    {
        image: business,
        title: 'Business Law',
        description: 'Antitrust and competition laws around the world are rapidly evolving and companies face new risks and challenges in keeping up with the complex and changing rules'
    },
    {
        image: accident,
        title: 'Accident & Injury Law',
        description: 'Antitrust and competition laws around the world are rapidly evolving and companies face new risks and challenges in keeping up with the complex and changing rules'
    },
    {
        image: health,
        title: 'Health Law',
        description: 'Antitrust and competition laws around the world are rapidly evolving and companies face new risks and challenges in keeping up with the complex and changing rules'
    },
    {
        image: family,
        title: 'Family Law',
        description: 'Antitrust and competition laws around the world are rapidly evolving and companies face new risks and challenges in keeping up with the complex and changing rules'
    },
    {
        image: criminal,
        title: 'Criminal Law',
        description: 'Antitrust and competition laws around the world are rapidly evolving and companies face new risks and challenges in keeping up with the complex and changing rules'
    },
    {
        image: capital,
        title: 'Capital Markets',
        description: 'Antitrust and competition laws around the world are rapidly evolving and companies face new risks and challenges in keeping up with the complex and changing rules'
    },
    {
        image: agreement,
        title: 'House & Estate Litigation',
        description: 'Antitrust and competition laws around the world are rapidly evolving and companies face new risks and challenges in keeping up with the complex and changing rules'
    },
]

const TEAM = [
    {
        name: '',
        position: '',
        image: '',
        description: ''
    },
    {
        name: '',
        position: '',
        image: '',
        description: ''
    },
    {
        name: '',
        position: '',
        image: '',
        description: ''
    },
    {
        name: '',
        position: '',
        image: '',
        description: ''
    },
    {
        name: '',
        position: '',
        image: '',
        description: ''
    }
]

const LEADERSHIP = [
    {
        image: americaLeadershipForum
    },
    {
        image: boardCertified
    },
    {
        image: courtTV
    },
    {
        image: houston
    },
    {
        image: nationalAssociationOfLawyers
    },
    {
        image: random
    },
    {
        image: superLawyers
    },
    {
        image: texasBarCollege
    },
    {
        image: texasCriminalDefenseLawyers
    },
    {
        image: topAttorneyDefense
    }
]

export const PIETER_JACOBS_LAW_DATA = {
    PRACTICE_AREAS,
    LEADERSHIP,
    TEAM
}
