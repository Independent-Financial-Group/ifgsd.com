import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../Button/Button";
import Container from "../Container/Container";

const Hero = ({ content }) => {
  return (
    <motion.header
      initial={{ y: 40, scale: 0.8, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-[calc(75vh-60px)] rounded-bl-[40px] rounded-br-[40px] bg-[url('/_home/images/hero.jpg')] bg-cover bg-center bg-no-repeat md:min-h-[calc(75vh-60px)] lg:min-h-[calc(90vh-60px)] xl:min-h-[calc(70vh-60px)]"
    >
      <Container>
        <div className="absolute top-[50%] w-[90%] translate-y-[-50%] md:w-auto">
          <div className="mb-4 sm:flex sm:justify-center md:justify-start">
            <Link
              href={`/press-and-media/press-releases/${content.reference.fields.slug}`}
              className="font-normal text-seabreeze-500 transition-all hover:scale-105 hover:shadow-lg"
              suppressHydrationWarning
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="flex w-full truncate rounded-full bg-neon-orange-500 px-3 py-1 text-sm font-bold leading-6 text-seabreeze-100 drop-shadow-xl md:w-full md:max-w-md"
                suppressHydrationWarning
              >
                <p className="truncate">{content.reference.fields.title}</p>
                <p
                  className="inset-0 ml-4 font-normal text-seabreeze-500"
                  aria-hidden="true"
                >
                  Read more &rarr;
                </p>
              </motion.div>
            </Link>
          </div>
          <div className="lg:max-w-prose">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-seabreeze-500"
            >
              {content.subheading}
            </motion.h2>
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl font-bold text-seabreeze-500 md:text-6xl"
            >
              {content.heading}
            </motion.h1>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6 leading-8 text-seabreeze-500 lg:text-xl"
            >
              {content.paragraph}
            </motion.p>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-10 flex items-center gap-x-6"
            >
              <Button href={"/join/contact"} type="primary">
                Get Started
              </Button>
              <Button href={"/join/why-choose-us/the-ifg-experience"}>
                Learn more <span aria-hidden="true">→</span>
              </Button>
              <a
                href="/about/our-story"
                className="text-md font-semibold leading-6 text-neon-orange-500"
              ></a>
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.header>
  );
};

export default Hero;
