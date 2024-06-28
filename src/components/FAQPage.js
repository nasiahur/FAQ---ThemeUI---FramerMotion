/** @jsxImportSource theme-ui */

import { Heading, Paragraph } from "theme-ui";
import { AnimatePresence, motion, stagger } from "framer-motion";
import { Card } from "./FAQ/Card";
import { useState } from "react";
import { Container, ContainerHalfAbsolute } from "./FAQ/Container";

export const FAQPage = ({}) => {
  const [questionAnswer, setQuestionAnswer] = useState([
    {
      question: "What is Front End Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Front End Mentor Free?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Can I use Front End Mentor Project in my portfolio?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
  ]);

  return (
    <Container>
      <ContainerHalfAbsolute />
      <Card>
        <Heading
          sx={{
            fontWeight: "bolder",
            fontSize: ["1.6rem", "1.8rem", "1.8rem", "1.8rem"],
            color: "black",
            display: "flex",
            alignContent: "center",
            gap: "1rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            fill="none"
            viewBox="0 0 40 41"
          >
            <path
              fill="#AD28EB"
              d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
            />
          </svg>
          FAQs
        </Heading>

        {questionAnswer.map((item, i) => (
          <Accordion key={i} i={i} data={item} />
        ))}
      </Card>
    </Container>
  );
};

const Accordion = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.div
        initial={false}
        animate={expanded ? "open" : "closed"}
        onClick={() => setExpanded(!expanded)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          alignItems: "center",
          cursor: "pointer",
          padding: "1px",
          zIndex: "2",
        }}
      >
        <Heading
          sx={{
            width:'80%',
            textAlign: "left",
            color: "black",
            fontWeight: "600",
            fontSize: ["1rem", "1.2rem", "1.2rem", "1.2rem"],
          }}
        >
          {data.question}
        </Heading>
        <AnimatePresence>
          {expanded ? (
            <motion.svg
              animate={{
                rotate: 180,
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              fill="none"
              viewBox="0 0 30 31"
            >
              <path
                fill="#301534"
                d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
              />
            </motion.svg>
          ) : (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              fill="none"
              viewBox="0 0 30 31"
            >
              <path
                fill="#AD28EB"
                d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
              />{" "}
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={false}
        animate={expanded ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
            opacity: 1,
            y: [-50, 0],
            transition: {
              duration: 0.5,
              type: "spring",
            },
          },
          closed: {
            height: 0,
            opacity: 0,
            transition: {
              duration: 0.5,
              type: "spring",
            },
          },
        }}
      >
        <Paragraph
          sx={{
            color: "gray",
          }}
        >
          {data.answer}
        </Paragraph>
      </motion.div>
    </>
  );
};
