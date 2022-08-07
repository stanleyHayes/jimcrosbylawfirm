import Layout from "../../components/layout/layout";
import {Box, CardMedia, Container, Stack, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "./../../assets/images/tingey-injury-law-firm-veNb0DDegzE-unsplash.jpg";
import criminal from "../../assets/images/scott-graham-OQMZwNd3ThU-unsplash.jpg";
import family from "../../assets/images/tingey-injury-law-firm-nSpj-Z12lX0-unsplash.jpg";
import injury from "../../assets/images/nasser-eledroos-20fmGtxKs_I-unsplash.jpg";
import marital from "../../assets/images/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg";
import civil from "../../assets/images/david-veksler-HpmDAS1Dozs-unsplash.jpg";

import React from "react";

const PracticeAreasPage = () => {

    return (
        <Layout>
            <Box>
                <Banner
                    title="Our Expertise"
                    links={[{label: 'Home', link: '/'}, {label: 'Practice Areas', link: '/practice-areas'}]}
                    backgroundImage={banner}
                />
            </Box>

            <Box sx={{py: 5, backgroundColor: 'background.default'}}>
                <Container>
                    <Typography variant="h3" align="center" sx={{color: 'text.primary', mb: 4}}>
                        Years of Combined Experience
                    </Typography>
                    <Typography variant="h4" align="center" sx={{color: 'text.primary'}}>
                        We have the know-how you need.
                    </Typography>
                </Container>
            </Box>

            <Box sx={{minHeight: '50vh', backgroundColor: 'background.paper'}}>
                <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                    <Box sx={{flex: 1, py: 4}}>
                        <Container>
                            <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                                Criminal Defense
                            </Typography>
                            <Box sx={{py: 2}}>
                                <Stack direction="column" spacing={2}>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Whether one is being investigated, prosecuted, sentenced or is seeking to
                                        appeal, the consequences that lie in criminal practice are unparalleled in the
                                        law. As soon as an arrest takes place (even if a Desk Appearance Ticket is
                                        issued), one can rest assured that his or her life will never be the same. Such
                                        an event will potentially impact one’s ability to get a job, apply to college
                                        and even stay in the United States.
                                    </Typography>

                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        From the start, the most critical factor in achieving a successful result in a
                                        criminal case is a dedicated, hardworking and aggressive criminal attorney. That
                                        is because attention to detail is the key in establishing a firm defense, and
                                        hiring an attorney who knows what to look for is most important. Perhaps certain
                                        evidence that the prosecution will seek to use was unconstitutionally obtained?
                                        Maybe the facts underlying the case warrant a reduction in charges? Can the case
                                        be taken to trial or is the evidence stacked so high that the careful
                                        negotiation of a favorable plea is the only option? The answers to these
                                        questions, and many others, are what a good attorney can and should provide.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        While each case is specific to its facts, the benefit of being represented by a
                                        good criminal defense attorney is vital in successfully defending a criminal
                                        case. The defense of criminal cases requires a particular set of qualities in an
                                        attorney, combining calculated aggression with compassionate communication. The
                                        complexities of the criminal justice system are designed so that the smallest
                                        mistake or wrongful act can lead to consequences from which there are no return.
                                        In dealing with the police, prosecutors and other agencies within the criminal
                                        justice system, an experienced attorney can navigate those deep waters so as to
                                        maximize the potential that the client escapes unscathed and unharmed.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        While most of the legal system is structured around the winning and losing of
                                        money, in criminal cases, freedom and liberty are at stake. For that reason, the
                                        attention to detail that is required in the successful representation of a
                                        client in a criminal case involves unmatched skill, experience and an
                                        open-minded attitude, in court and elsewhere. Dmitriy Shakhnevich has experience
                                        that gives him unique ability in the successful representation of a client in a
                                        criminal case.
                                    </Typography>
                                </Stack>
                            </Box>
                        </Container>
                    </Box>
                    <Box sx={{flex: 1, minHeight: '100%'}}>
                        <CardMedia
                            component="img"
                            src={criminal}
                            sx={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            <Box sx={{minHeight: '50vh', backgroundColor: 'background.default'}}>
                <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                    <Box sx={{flex: 1, minHeight: '100%'}}>
                        <CardMedia
                            component="img"
                            src={injury}
                            sx={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </Box>
                    <Box sx={{flex: 1, py: 4}}>
                        <Container>
                            <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                                Personal Injury
                            </Typography>
                            <Box sx={{py: 2}}>
                                <Stack direction="column" spacing={2}>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Unfortunately, physical injuries are a sad part of life. In most cases, those
                                        injured have to simply lick their wounds and move on with their lives. However,
                                        in certain cases, injuries can be caused by the negligence of others. In these
                                        cases, the law provides those injured with an outlet. That outlet comes in the
                                        form of a personal injury lawsuit against the negligent party.
                                    </Typography>

                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        A lawsuit can be based on a landowner failing to properly monitor his or her
                                        property, an automobile driver texting and failing to stop before hitting a
                                        pedestrian, a dog owner allowing his dog to sprint away and viciously bite an
                                        innocent person or a doctor thinking about something else during a patient’s
                                        visit and failing to notice a potentially damaging health-related problem. In
                                        any of these, the courts have developed a system in which the wrongful parties
                                        are held accountable. In order to make use of this process, a lawyer who knows
                                        how to properly litigate a personal injury case is a necessity. From asking the
                                        right questions at a deposition to meeting with experts to discuss injuries, a
                                        skillful personal injury lawyer must understand the pros and cons of how to
                                        litigate a case of this nature. Only then can those who acted improperly, and
                                        injured others, be held accountable.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        New York City lawyer Dmitriy Shakhnevich believes that personal injury cases
                                        commonly give rise to numerous unforeseen issues and unanticipated hurdles
                                        throughout the course of the representation. If a client is injured, the road to
                                        financial recovery will vary from case to case. Every accident arises from a
                                        unique set of facts. For this reason, it is important to contact an experienced
                                        attorney right away.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Our firm has handled numerous personal injury cases. Over the years, we have
                                        developed in-depth knowledge of the applicable law and the claim process.
                                        Generally, the laws are designed to protect victims. These laws, of course, have
                                        to be applied properly in order to achieve the maximum benefits of their
                                        protections.
                                    </Typography>
                                </Stack>
                            </Box>
                        </Container>
                    </Box>
                </Box>
            </Box>

            <Box sx={{minHeight: '50vh', backgroundColor: 'background.paper'}}>
                <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                    <Box sx={{flex: 1, py: 4}}>
                        <Container>
                            <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                                Civil Litigation
                            </Typography>
                            <Box sx={{py: 2}}>
                                <Stack direction="column" spacing={2}>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Most hard-working people have a lot to lose if a lawsuit is filed against them.
                                        If a judgment is entered, those people jeopardize the financial viability of
                                        their assets, and risk wages being garnished, so detailed attention and
                                        immediate action is required. However, this action must be taken with care. It
                                        is important to hire a civil attorney that will sit down with you and carefully
                                        discuss the procedural posture of a lawsuit, the substantive legal issues that
                                        are in dispute and the steps that clients should take to protect themselves, in
                                        and out of the courtroom.
                                    </Typography>

                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Defending a lawsuit is virtually inescapable, unfortunately. After all, once one
                                        is served with a lawsuit, he or she must respond or be deemed to have lost the
                                        suit by default. The filing of a lawsuit, on the other hand, is entirely
                                        different. If one decides that a lawsuit is the only measure left to recover
                                        damages, then the way that lawsuit is filed, the forum in which it is filed and
                                        the particular claims that are to be made are vital and critical areas of focus.
                                        In addition, what damages must the plaintiff seek? Perhaps injunctive relief,
                                        rather than monetary compensation, would work best to serve the plaintiff’s
                                        purpose in filing a lawsuit. These are all questions only an experienced and
                                        skilled New York City civil litigation lawyer could properly answer.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        The stages of a civil lawsuit are complex and can be extremely burdensome. Many
                                        lawsuits are document-heavy and the taking of party and non-party depositions
                                        can raise one’s cost of pursuing their claims tremendously. Having an attorney
                                        that is able to navigate those deep waters while ensuring that the client is
                                        acting in the most responsible and cost-effective way are essential elements of
                                        fighting in court. Fighting in court is tough, but going at it alone can be even
                                        tougher. Litigation attorneys must be able to put themselves in your shoes and
                                        bring such passion into a case, that it cannot be matched by the opposing party
                                        or anyone else. For that, however, the attorney that is hired must effectively
                                        handle the often-challenging and commonly unforeseen aspects of a lawsuit. From
                                        the initial stages of a lawsuit to the potential trial and beyond, your civil
                                        litigation lawyer must possess the skill and desire to succeed in court.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        In our employment law practice, our firm realizes that the American worker is at
                                        the foundation of our societal core. We understand that when such a fundamental
                                        piece of our population suffers at the hands of wrongful termination,
                                        discrimination or unpaid wages, we all suffer. As such, our employment lawyers
                                        fight aggressively and forcefully on behalf of our clients.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        At our New York City law firm, we put your fate into our hands and guarantee
                                        zealous, diligent and dedicated representation.
                                    </Typography>
                                </Stack>
                            </Box>
                        </Container>
                    </Box>
                    <Box sx={{flex: 1, minHeight: '100%'}}>
                        <CardMedia
                            component="img"
                            src={civil}
                            sx={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box sx={{minHeight: '50vh', backgroundColor: 'background.default'}}>
                <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                    <Box sx={{flex: 1, minHeight: '100%'}}>
                        <CardMedia
                            component="img"
                            src={marital}
                            sx={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </Box>
                    <Box sx={{flex: 1, py: 4}}>
                        <Container>
                            <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                                Matrimonial and Family Law
                            </Typography>
                            <Box sx={{py: 2}}>
                                <Stack direction="column" spacing={2}>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Family cases are always emotionally charged, and an attorney must be sensitive
                                        to what a client is going through, and provide exceptional representation. The
                                        circumstances typically surrounding any family case are extraordinary, so the
                                        attorneys involved have to rise to the occasion.
                                    </Typography>

                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Some clients are different than others, as some require a certain degree of
                                        hand-holding, while others operate independently and with comfort before a judge
                                        or in court. But a lawyer must not only understand the legal implications of
                                        every move that is made and every order issued by the court. A lawyer must grasp
                                        the commonly unnatural circumstances underlying any family case and make
                                        passionate arguments in court, so as to allow a client’s true needs and desires
                                        to be heard. After all, the topics at issue here are a client’s relationship
                                        with his or her children and relationships with other close family members.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        However, sensitivity and diplomacy in family cases must not be misinterpreted by
                                        the other party and the court to mean weakness and fragility in one’s position.
                                        Due to the very dramatic nature of the proceedings themselves, lawyers must be
                                        able to make impassioned arguments on behalf of their clients, and act with
                                        authority, within the confines of the law and ethical conduct. To make such
                                        arguments, extensive preparation is required. Lawyers in these very delicate
                                        cases must understand a client’s history, family relationships, financial
                                        situation, employment status, and all of the other elements involving a client’s
                                        background, to truly understand a client’s motivation and position in the case.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Family cases are cases in which the client puts his or her entire life into the
                                        lawyer’s hands. Bestowing upon another individual the right to advocate upon
                                        your behalf in matters involving your family and children is a responsibility
                                        that cannot be taken lightly. As such, family lawyers in New York City must have
                                        the wherewithal and expertise to properly point clients in the right direction,
                                        protect those clients' interests and speak on behalf of the clients with the
                                        same passion and determination as if the clients are speaking on behalf of
                                        themselves.
                                    </Typography>
                                </Stack>
                            </Box>
                        </Container>
                    </Box>
                </Box>
            </Box>
            <Box sx={{minHeight: '50vh', backgroundColor: 'background.paper'}}>
                <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                    <Box sx={{flex: 1, py: 4}}>
                        <Container>
                            <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                                Entertainment Law
                            </Typography>
                            <Box sx={{py: 2}}>
                                <Stack direction="column" spacing={2}>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Entertainment law is a broad phrase that includes many different areas of law.
                                        From employment matters to protecting one’s rights in a defamation lawsuit, our
                                        firm offers a wide range of services in the protection of entertainers and
                                        entertainment companies, from all walks of life. Our firm generally provides
                                        representation in this field in one of two ways: transactional representation
                                        and dispute/litigation services. Both spheres of representation carry tremendous
                                        consequences for our clients involved in the entertainment industry.
                                    </Typography>

                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Traditional definitions and understandings of what constitutes entertainment
                                        have changed and will continue to change. Lawyers must be able to comprehend
                                        those changes and effectively operate in conjunction with those changes to
                                        successfully represent their clients.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Transactional representation carries enormous implications for clients, and our
                                        firm fully understands and comprehends those implications. The sensitivity and
                                        care required in representation in contract negotiations, employment agreements
                                        and similar endeavors are vital for our clients. Many clients devote their
                                        entire lives to learning and perfecting a craft, skill or proficiency, in a
                                        particular field, and their blood, sweat and tears should never be forgotten by
                                        their lawyers. Lawyers should never be so fully removed from their clients’
                                        lives so as to forget that.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Dispute representation takes place when a particular client feels wronged or
                                        violated in such a way that amicable resolution is no longer an option. In those
                                        instances, our firm is hired to initiate adversarial efforts to right a wrong in
                                        a way that only lawyers with in-depth and detailed knowledge of the legal system
                                        can. If the aforementioned efforts lead to a lawsuit or require representation
                                        in court, then a lawyer must possess sufficient understanding of the litigation
                                        process to properly represent a client’s interests in a court of law.
                                    </Typography>
                                </Stack>
                            </Box>
                        </Container>
                    </Box>
                    <Box sx={{flex: 1, minHeight: '100%'}}>
                        <CardMedia
                            component="img"
                            src={family}
                            sx={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default PracticeAreasPage;
