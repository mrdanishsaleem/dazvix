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
    title: "3D modeling & art",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
  {
    id: 2,
    icon: icon5,
    moreLink: "#learn-more",
    title: "Digital promotion",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
  {
    id: 3,
    icon: icon6,
    moreLink: "#learn-more",
    title: "Business Enterprise",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
  {
    id: 4,
    icon: icon7,
    moreLink: "#learn-more",
    title: "Marketing & advertising",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
  {
    id: 5,
    icon: icon8,
    moreLink: "#learn-more",
    title: "Ultimate development",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
  {
    id: 6,
    icon: icon9,
    moreLink: "#learn-more",
    title: "Online support",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Other services you must appreciate"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
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
