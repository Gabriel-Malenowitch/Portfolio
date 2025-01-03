import { Box, Grid, List, ListItem, Typography } from '@mui/material'
import ImageHandWithTwoFingersUpEmoji from '@public/hand-with-two-fingers-up-emoji.png'
import { ExternalLink, Gap } from '@src/components'
import Image from 'next/image'

export default function IndexPage(): JSX.Element {
  return (
    <Box padding={{ xs: 8, sm: 16 }}>
      <Box component='main'>
        <Grid container item spacing={0} md={6} flexDirection='column'>
          <Image
            width={64}
            src={ImageHandWithTwoFingersUpEmoji}
            alt='Yellow hand emoji, in a 3D style, with two fingers up, like a cool greeting gesture.'
            className='animation-wave'
          />

          <Gap vertical={4} />

          <Typography component='h1' color='primary' fontWeight={700} lineHeight='1.25' variant='h3'>
            Hey! My name is Gabriel Malenowitch, and I'm an Software Engineer.
          </Typography>

          <Gap vertical={4} />

          <Typography component='h2' color='primary' fontWeight={400} lineHeight='1.75' variant='body1'>
            Since 2013 into technology. Since 2022 into business.
          </Typography>

          <Gap vertical={4} />

          <Typography component='h3' color='primary' fontWeight={500} lineHeight='1.75' variant='h5'>
            Hi! My name is Gabriel! I'm a 22-year-old guy who loves logic and solving problems with it. I also love
            going to the gym, and I enjoy drawing a bit too, but let's focus on coding! My journey started when I was 16
            years old, when I discovered Python and programming logic - it blew my mind.
          </Typography>
          <br />
          <Typography component='h3' color='primary' fontWeight={500} lineHeight='1.75' variant='h5'>
            The power to turn ideas into reality exists and can be achieved with programming.
          </Typography>
          <br />
          <Typography component='h3' color='primary' fontWeight={500} lineHeight='1.75' variant='h5'>
            After that experience, I focused a huge part of my energy on programming, initially just as a hobby. Once I
            finished high school, I started to professionalize myself to become an outstanding programmer, and that’s
            the journey I’m still on today. I hope my passion and dedication can be useful to you!
          </Typography>

          <Gap vertical={8} />
        </Grid>
      </Box>

      <Box component='footer'>
        <Box component='nav'>
          <Grid component='ul' container spacing={8}>
            <Grid component='li' item>
              <Typography
                component={ExternalLink}
                variant='body1'
                color='primary'
                fontWeight={600}
                href='https://www.linkedin.com/in/gabriel-botelho-malenowitch-9a0523214/'>
                LinkedIn
              </Typography>
            </Grid>

            <Grid component='li' item>
              <Typography
                component={ExternalLink}
                variant='body1'
                color='primary'
                fontWeight={600}
                href='https://github.com/gabriel-malenowitch'>
                GitHub
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Gap vertical={16} />
      </Box>

      <Box component='main'>
        <Grid container item spacing={0} md={6} flexDirection='column'>
          <Typography component='h3' color='primary' fontWeight={700} lineHeight='1.25' variant='h5'>
            Recommended books:
          </Typography>
          <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>The Art of Living - Epictetus's</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Meditations of Marcus Aurelius</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Concurrent Data Processing in elixir - Svilen Gospodinov</ListItem>
            <ListItem sx={{ display: 'list-item' }}>swyx - The Coding Career Handbook</ListItem>
            <ListItem sx={{ display: 'list-item' }}>The bullet journal method - Ryder Carroll</ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              100M offers how to make offers so good people felel stupid saying no...
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>Livro de Ouro dos Gatilhos Mentais - Gustavo Ferreira</ListItem>
            <ListItem sx={{ display: 'list-item' }}>How to Win Friends and Influence People - Dale Carnegie</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Convince Them in 90 Seconds or Less - Nicholas Boothman</ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              The Like Switch: An Ex-FBI Agent S Guide to Influencing, Attracting, and Winning People Over: 1 - Jack
              Schafer
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>Never finished - David Goggins</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Cant't hurt me - David Goggins</ListItem>
            <ListItem sx={{ display: 'list-item' }}>Rebuilding Milo - Aaron Horschig</ListItem>
          </List>
          <Gap vertical={4} />
        </Grid>
      </Box>
    </Box>
  )
}
