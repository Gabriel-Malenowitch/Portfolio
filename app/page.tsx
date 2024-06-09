import { Text, HStack, Heading, VStack, GridItem, Grid, Link, Button, UnorderedList, ListItem, Code } from "@chakra-ui/react";

import HeadphonesIcon from '@mui/icons-material/Headphones';
import { ThreeJsModel } from "./threejs-model";
import { DownloadCurriculumButton } from "./download-curriculum-buttom";

export default function Home() {
  
  return (
      <section style={{maxWidth: 1000, padding: 32}}>
        <header>
          <HStack flexDirection={{ base: "column", xs: "row" }}  justifyContent="space-between" style={{padding: "32px 16px"}}>
            <Heading as="h6" alignItems="center" display="flex">
              <HStack gap={4}>
                <Text>
                  Portifólio
                </Text>
                <HeadphonesIcon fontSize="large" /> 
              </HStack>
            </Heading>
            <DownloadCurriculumButton />
          </HStack>
        </header>
        <main>
          <section id="home">
            <VStack alignItems="start">
              <Text>
                {'"'}Nas linhas de código, descubro um portal para a imaginação, onde problemas se transformam em desafios emocionantes e cada bug é uma oportunidade para aprender. Meu código é minha voz, minha maneira de comunicar ideias e moldar a realidade. Como um artista com seu pincel, mergulho nas profundezas da minha lógica, criando obras-primas digitais que transcendem o tempo e o espaço.
              </Text>
              <br />
              <Text>
                Em cada projeto, encontro uma jornada única, uma aventura emocionante que me leva a explorar novos horizontes e a desafiar meus limites. É a busca incessante pelo conhecimento, a emoção de resolver problemas complexos e a satisfação de ver minhas ideias ganharem vida através de linhas de código.{'"'}
              </Text>
              <HStack justifyContent="end" width="100%">
                <Text> ~ Gabriel B. Malenowitch</Text>
              </HStack>
            </VStack>
            <Heading as="h6" alignItems="center" display="flex" pl={4}>
              <Text>Contatos</Text>
            </Heading>
            <br />
            <Grid gridTemplateColumns="1fr 1fr">
              <GridItem>
              <UnorderedList>
                <ListItem>
                  <Code>
                    gabrielbotelhomalenowitch@gmail.com
                  </Code>
                </ListItem>
                <ListItem>
                  <Link href="https://github.com/gabriel-malenowitch" target="_blank">
                    <Code>
                      Github
                    </Code>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://www.linkedin.com/in/gabriel-botelho-malenowitch-9a0523214/" target="_blank">
                    <Code>
                      Linkedin
                    </Code>
                  </Link>
                </ListItem>
                </UnorderedList>
              </GridItem>
              {/* // TODO: Adicionar modelo 3 aqui */}
              <GridItem>
                {/* <ThreeJsModel /> */}
              </GridItem>
            </Grid>
          </section>
        </main>
      </section>
  );
}
