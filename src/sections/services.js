/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { rgba } from "polished";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";
import icon1 from "assets/images/icons/service1.png";
import icon2 from "assets/images/icons/service2.png";
import icon3 from "assets/images/icons/service3.png";

const data = [
  {
    id: 1,
    icon: icon1,
    title: "Marketing & advertising",
    description: `Need a shout-out to the world? Or just building a rock-solid brand presence? Stand out from the crowd by allowing our bloggers, designers, SEO and social media experts to raise the bar for your competition.`,
  },
  {
    id: 3,
    icon: icon2,
    title: "Ultimate development",
    description: `Got a business plan? Hit the market faster with ZERO budget overruns. End-to-end native mobile apps and web portal development with off-the-shelf pricing while you focus on your business plan.`,
  },
  {
    id: 4,
    icon: icon3,
    title: "Business Enterprise",
    description: `Business Enterprise means big work! Let us brighten up your day with fully integrated, enterprise grade solutions and reporting at dirt cheap pricing. Need something that is not listed? Drop us a line and we will add it to our roadmap!`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Grow your startup with our Service"
          description="We offer business development consultancy services per equity."
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

export default Services;

const styles = {
  section: {
    backgroundColor: rgba("#FFF5ED", 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: "grid",
    justifyContent: ["center", null, null, "unset"],
    gridTemplateColumns: [
      "repeat(1, 285px)",
      "repeat(1, 325px)",
      "repeat(1, 285px)",
      "repeat(3, 1fr)",
    ],
  },
};
