import { Text, HStack, Heading, VStack, Link, Code, Box } from "@chakra-ui/react";

import { DownloadCurriculumButton } from "./download-curriculum-buttom";

export default function Home() {
  
  return (
      <Box id="home" style={{maxWidth: 1000, padding: 32}} fontSize={{ base: "0.8em", sm: "1em" }}>
        <header>
          <Heading id="head">
            <Text id="title">
              Gabriel Malenowitch
            </Text>
            <DownloadCurriculumButton />
          </Heading>
        </header>
        <main>
          <section>
            <VStack alignItems="start" gap={6} >
              <Text fontSize='2rem' fontWeight="bold">
                Hi!! My name is Gabriel B. Malenowitch, and I'm a Full-stack Engineering Developer. <div className="crazyRotation">👋</div>
              </Text>
              <Text fontSize='0.9em' fontWeight="light">
                From 2003 january, i am a guy who loves logic and solving problems with it. I also love going to the gym, and I enjoy drawing a bit too, but let's focus on coding! 😄
              </Text>
              <Text fontSize='1.25em'>
                My journey started when I was 16 years old, when I discovered Python and programming logic - it blew my mind. The power to turn ideas into reality exists and can be achieved with programming.
              </Text>
              <Text fontSize='1.25em'>
                After that experience, I focused a huge part of my energy on programming, initially just as a hobby. Once I finished high school, I started to professionalize myself to become an outstanding programmer, and that’s the journey I’m still on today. I hope my passion and dedication can be useful to you!
              </Text>
            </VStack>
            <br />
            <VStack spacing={2} id="footer" alignItems="start" fontSize="1.5rem">
              <HStack>
                <Link href="https://github.com/gabriel-malenowitch" target="_blank">
                  Github
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-botelho-malenowitch-9a0523214/" target="_blank">
                  Linkedin
                </Link>
              </HStack>
              <Code>
                gabrielbotelhomalenowitch@gmail.com
              </Code>
            </VStack>
          </section>
        </main>
      </Box>
  );
}
