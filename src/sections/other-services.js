/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";
import icon4 from "assets/images/icons/service4.png";
import icon5 from "assets/images/icons/service5.png";
import icon6 from "assets/images/icons/service6.png";
import icon7 from "assets/images/icons/service7.png";
import icon8 from "assets/images/icons/service8.png";
import icon9 from "assets/images/icons/service9.png";

const data = [
  {
    id: 1,
    icon: icon4,
    moreLink: "#learn-more",
    title: "UI/UX",
    description: `We offer industry-centric designers for you so that all your logo designs are made accurately industry-centric designers for you. Most stunning Logo Design Solutions for businesses that want to win.`,
  },
  {
    id: 2,
    icon: icon5,
    moreLink: "#learn-more",
    title: "Digital promotion",
    description: `Need a shout-out to the world? Or just building a rock-solid brand presence? Stand out from the crowd by allowing our bloggers, designers, SEO and social media experts to raise the bar for your competition.`,
  },
  {
    id: 3,
    icon: icon6,
    moreLink: "#learn-more",
    title: "Business Enterprise",
    description: `Business Enterprise means big work! Let us brighten up your day with fully integrated, enterprise grade solutions and reporting at dirt cheap pricing. Need something that is not listed? Drop us a line and we will add it to our roadmap!`,
  },
  {
    id: 4,
    icon: icon7,
    moreLink: "#learn-more",
    title: "Marketing & advertising",
    description: `Digital marketing agencies like Dazvix are aware of the pervasiveness of social media platforms like Facebook, Twitter, Instagram, TikTok, and many others in all aspects of our lives. From a marketing standpoint, we recommend a planned approach to social media management. That means developing a theme for your ads and posts, deciding your social media budget, scheduling when your posts will have the most impact. `,
  },
  {
    id: 5,
    icon: icon8,
    moreLink: "#learn-more",
    title: "Ultimate development",
    description: `Got a business plan? Hit the market faster with ZERO budget overruns. End-to-end native mobile apps and web portal development with off-the-shelf pricing while you focus on your business plan.`,
  },
  {
    id: 6,
    icon: icon9,
    moreLink: "#learn-more",
    title: "Online support",
    description: `Experienced. Reliable. Cost Effective. These are the characteristics to look when setting up a call center. We promise that but there is icing on the cake: Can-do attitude with the ability to scale as your business grows! `,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Other services you must appreciate"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default OtherServices;

const styles = {
  section: {
    backgroundColor: "#F9FAFC",
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: "10px auto 0",
    },
  },
  contentWrapper: {
    gap: ["30px 30px", "30px 30px", "30px 30px", "80px 30px"],
    display: "grid",
    justifyContent: ["center", "center", "center", "unset"],
    gridTemplateColumns: [
      "repeat(1, 285px)",
      "repeat(1, 325px)",
      "repeat(1, 285px)",
      "repeat(3, 1fr)",
    ],
  },
};
