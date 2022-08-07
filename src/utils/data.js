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
import criminal from "./../assets/images/mugshot.png";
import family from "./../assets/images/family-silhouette.png";
import capital from "./../assets/images/capital.png";
import agreement from "./../assets/images/agreement.png";


import destruction from "./../assets/images/destroying-criminal-record.webp";
import stateAppeals from "./../assets/images/state-appeals.webp";
import federalAppeals from "./../assets/images/federal-appeals.webp";
import beforeCharges from "./../assets/images/before-charges.webp";
import federalTrial from "./../assets/images/federal-trial.webp";
import stateTrial from "./../assets/images/state-trial.webp";

const PRACTICE_AREAS = [
    {
        image: accident,
        title: 'Accident & Injury Law',
        description: 'Unfortunately, physical injuries are a sad part of life. In most cases, those injured have to simply lick their wounds and move on with their lives. However, in certain cases, injuries can be caused by the negligence of others. In these cases, the law provides those injured with an outlet. That outlet comes in the form of a personal injury lawsuit against the negligent party.'
    },
    {
        image: family,
        title: 'Family Law',
        description: 'Family cases are always emotionally charged, and an attorney must be sensitive to what a client is going through, and provide exceptional representation. The circumstances typically surrounding any family case are extraordinary, so the attorneys involved have to rise to the occasion.'
    },
    {
        image: criminal,
        title: 'Criminal Law',
        description: 'Whether one is being investigated, prosecuted, sentenced or is seeking to appeal, the consequences that lie in criminal practice are unparalleled in the law. As soon as an arrest takes place (even if a Desk Appearance Ticket is issued), one can rest assured that his or her life will never be the same. Such an event will potentially impact one’s ability to get a job, apply to college and even stay in the United States.'
    },
    {
        image: capital,
        title: 'Entertainment Law',
        description: 'Entertainment law is a broad phrase that includes many different areas of law. From employment matters to protecting one’s rights in a defamation lawsuit, our firm offers a wide range of services in the protection of entertainers and entertainment companies, from all walks of life.'
    },
    {
        image: agreement,
        title: 'Civil Litigation',
        description: 'Most hard-working people have a lot to lose if a lawsuit is filed against them. If a judgment is entered, those people jeopardize the financial viability of their assets, and risk wages being garnished, so detailed attention and immediate action is required. However, this action must be taken with care.'
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

const REVIEWS = [
    {
        title: 'State Trial',
        description: 'Attorney Mr Jacobs is a very professional and awesome lady. She resolved all my issues in a professional manner. I would definitely use Mr Jacobs in the future if I need to again. Thank you Mr Jacobs',
        date: 'May, 2021',
        rating: 4.6,
        image: agreement
    },
    {
        title: 'State Sentencing',
        description: 'Pieter Jacobs recently represented me in a criminal matter in Harris County, Texas criminal court. The case was extremely complex. Pieter Jacobs literally saved my life. I am a former attorney, and I can easily attest that Pieter Jacobs is one of the smartest lawyers that I have ever met. She has extensive knowledge of criminal law and procedure. Pieter Jacobs spent countless hours working on my case. She developed a a case strategy and worked it to perfection. Pieter Jacobs was always very well prepared, and she outworked the opposing counsel. Pieter Jacobs was always very honest with me. Pieter Jacobs and his staff made me feel like family. I highly recommend Pieter Jacobs',
        date: 'April, 2021',
        rating: 5,
        image: agreement
    },
    {
        title: 'State Trial',
        description: 'Attorney Mr Jacobs is a very professional and awesome lady. She resolved all my issues in a professional manner. I would definitely use Mr Jacobs in the future if I need to again. Thank you Mr Jacobs',
        date: 'May, 2021',
        rating: 4.8,
        image: agreement
    },
    {
        title: 'State Sentencing',
        description: 'The most honest & reliable attorney in the state of Texas, I have hired many attorneys & been screwed by many attorneys before I met Mrs. Roe, she has always been there for me whether it was a case I had her handling or just advice that I needed from someone I can trust & not once has she EVER steered me wrong or ANYONE that I have ever referred her to.... If ur in a tight spot & need legal help Pieter Jacobs is the ONLY person I would ever recommend to anyone...',
        date: 'March, 2020',
        rating: 5,
        image: agreement
    },
    {
        title: 'State Sentencing',
        description: 'I was on a long journey through probation, and was almost finished when I got in trouble again. The situation looked very bleak, I was crying for help and was sure I would end up in prison for a long time. I found Carmen and I talked to her and she changed my outlook, she made me positive and gave me hope that everything would be ok. I am currently off probation and 6months sober and I couldn\'t have done either with out her. ',
        date: 'February, 2019',
        rating: 5,
        image: agreement
    },
    {
        title: 'Federal Trial & Sentencing',
        description: 'I had a federal case. With the help of Carmen, my sentence was drastically reduced and she exceeded my expectations . Carmen not only was extremely nice but she was more than just a lawyer, she developed a bond with me that I didn’t know was possible, and she earned my complete trust in the process. She always checked up on me and made sure I was doing okay. She always said I was welcome to come and consult with her any time I wanted . Not only did she get to know me but she got to know my family and my history. She continued to do follow ups and kept me optimistic. I felt so comfortable around her and I’m proud to have had her as my lawyer. I recommend her to any and everybody. ',
        date: 'January, 2019',
        rating: 4.4,
        image: agreement
    },
    {
        title: 'Referrals',
        description: 'I reached out to Ms. Roe about some legal trouble I got into, unfortunately she did not practice in the area I needed help in. But even though she could not help me herself, Ms. Roe and her staff helped me out by referring me to a great lawyer that resolved my case for me! Not only was this lawyer great but Ms. Roe and her staff got me where I needed to be to get the best help possible. All I can say is that great people know great people!! So even if Ms. Roe cannot be your lawyer just know she will take care of you and refer you to someone that can and will treat you with the same respect as she and her staff would !!!!!',
        date: 'March, 2020',
        rating: 4.7,
        image: agreement
    },
    {
        title: 'Post Conviction Relief',
        description: 'I am forever grateful to Pieter Jacobs for her unwavering hard work on my case. I was charged with a felony in 2010, and made the mistake of hiring a terrible lawyer whose gross negligence on my case led to me pleading guilty. I met with Pieter Jacobs in 2016 and spoke to her about my case. She listened diligently and agreed that I was denied effective assistance of counsel, and that my plea of guilty was not knowingly and voluntarily entered because my lawyer did not properly advise me. Soon after our meeting, Pieter Jacobs drafted and filed a writ of habeas corpus. She worked tirelessly, going back and forth speaking with prosecutors, never taking no for an answer. I am so delighted to say that we got awarded the writ! Pieter Jacobs then quickly started filing the petition for expansion. As of today, my nightmare has ended, and the guilty conviction is forever off of my records. I cannot thank Pieter Jacobs enough. She will listen to you and fight for you. Her and her team will keep you in the loop every step of the way. Any questions or concerns you might have get quickly answered. You are never left in the dark.  Pieter Jacobs is devoted and loves what she does. If you hire Pieter Jacobs, then you can rest easy knowing you are getting the absolute best representation.',
        date: 'February, 2019',
        rating: 5,
        image: agreement
    }
];

const DEFENSE = [
    {
        title: 'Destroying Your Criminal Record',
        description: 'If your criminal charges were dismissed, you are entitled to petition to have all records of your arrest destroyed through a process called an expansion. If you successfully completed a deferred adjudication-probation, you may be eligible to seal your record through a process called nondisclosure. Send us an email or call to find out if you qualify for either a petition for expansion or petition for nondisclosure. ',
        image: destruction
    },
    {
        title: 'State Appeals',
        description: 'Pieter Jacobs Law Firm specializes in State appeals including motions for new trial, appeal of pretrial motions such as a motion to suppress as well as appealing trial and punishment determinations. A motion for new trial is an opportunity to both preserve rights on appeal and reverse jury and judge determinations. This process occurs before the direct appeal process begins. All appeals are regulated by strict timelines so contact us today to discuss your options. Pieter Jacobs Law Firm in Houston can help with your State appeals. ',
        image: stateAppeals
    },
    {
        title: 'Federal Appeals',
        description: 'Pieter Jacobs Law Firm is also experienced in handling your federal appeal to challenge errors at trial or during sentencing. Many federal charges result in a plea of guilty so much of the focus on appeal will be on the sentencing phase. Any error in sentencing calculations under the Sentencing Guidelines is an important area to develop on appeal. Any appeal of a jury verdict will always focus on errors in the trial court. Some errors must be raised on appeal or they are waived. Appeals have strict timelines that must be followed. Contact us to discuss your case in detail to find out what rights you have on appeal. Pieter Jacobs Law Firm in Houston can help with your Federal appeal. ',
        image: federalAppeals
    },
    {
        title: 'Before Charges Are Filed',
        description: 'If you believe you may  be charged with a crime or that you are being investigated by law enforcement, it is never too early to call a lawyer to get advice about your rights.  You also have the right to have an attorney present for any questioning by police or an agent of police. Contact us to discuss your questions and concerns before answering questions.',
        image: beforeCharges
    },
    {
        title: 'Federal Trial',
        description: 'Being accused of a crime by the United States of America can be a scary experience when the full power of the government is against you. Pieter Jacobs Law Firm in Houston is ready to stand between you and the federal government to defend against complex white collar crimes and other serious federal allegations to protect your rights when it matters the most. Contact us to discuss your concerns if you are contacted by a federal agent or charged in federal court.',
        image: federalTrial
    },
    {
        title: 'State Trial',
        description: 'Over 90% of all criminal defense matters are resolved without a trial. Pieter Jacobs Law Firm in Houston is committed to fighting for your interests before trial and at any jury trial.  We use our knowledge and preparation to take advantage of all pretrial avenues to avoid prolonging a case and to ensure the best outcome. We are also committed to going to trial with the same knowledge, preparation and fierce advocacy to get the best results for you. Contact us to get started investigating the prosecutor\'s allegations against you',
        image: stateTrial
    }
];

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
    TEAM,
    REVIEWS,
    DEFENSE
}
