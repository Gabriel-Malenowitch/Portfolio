import { Text, HStack, Heading, Link, VStack, Highlight, GridItem, Grid } from "@chakra-ui/react";

import profileImage from '../../public/profile-image.png'
import MicNoneIcon from '@mui/icons-material/MicNone';
import Image from "next/image";

export default function Home() {
  
  return (
      <section style={{maxWidth: 1000}}>
        <header>
          <HStack  justifyContent="space-between" style={{padding: "32px 16px"}}>
            <Heading as="h6" alignItems="center" display="flex">
              <HStack gap={4}>
                <MicNoneIcon fontSize="large" /> 
                <Text>
                  Portifólio
                </Text>
              </HStack>
            </Heading>
            <HStack>
              <Link href="#home" fontWeight="bold">
                Home
              </Link>
              <Link href="#portfolio" fontWeight="bold">
                Portifólio
              </Link>
              <Link href="#contact" fontWeight="bold">
                Contato
              </Link>
            </HStack>
          </HStack>
        </header>
        <main>
          <section id="home">
            <Grid gridTemplateColumns="1fr 1fr" gap={8}>
              <GridItem>
                <VStack alignItems="start">
                  <Text>
                    Olá, meu nome é Fanciley Leitão!! E eu sou <Text fontWeight="bold" as="span">Locutor</Text>!
                  </Text>
                  <br />
                  <Text>
                    Entusiasta de locução e dublagem, tenho grande interesse na área desde muito novo. Tenho 25 anos e uma voz grave e madura.
                    Iniciei o estudo de locução por ouvir a todo instante de pessoas que conheço que minha voz é ideal para a profissão.
                  </Text>
                  <Text>
                    Me formei como locutor na SR Escola de Locução tendo como professora a ilustre Simone Rigotti, locutora com vasto conhecimento e experiência em rádio e TV. Ainda estudando locução com o curso fluência verbal de Fabiano Vieira.
                  </Text>
                  <Text>
                    Tenho muita admiração e inspiração por eles e por vários profissionais da voz como Daniel Gonçalves, Jorge Ribeiro e Flavio Siqueira.
                    Estou em busca de oportunidades na rádio como locutor e gostaria de uma oportunidade de trabalhar com vocês!
                  </Text>
                </VStack>
              </GridItem>
              <GridItem>
                <Image src={profileImage} alt="Imagem de perfil" />
              </GridItem>
            </Grid>
          </section>
        </main>
      </section>
  );
}
