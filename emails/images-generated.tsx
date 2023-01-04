import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';

export default function Email() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

  return (
    <Html>
      <Head />
      <Preview>Here's a preview of how they look like...</Preview>
      <Section style={main}>
        <Container style={container}>
          <Img
            style={logo}
            src={`${baseUrl}/static/logo.png`}
            width="173"
            height="45"
            alt="Booth.ai"
          />
          <Section>
            <Text style={text}>Hi John,</Text>
            <Text style={text}>
              Your background images are ready! Here's a preview of how they look like:
            </Text>
            <Img
              style={preview}
              src={`${baseUrl}/static/preview.png`}
              width="360"
              height="450"
              alt="Booth.ai Preview"
            />
            <Section style={buttonContainer}>
              <Button style={button} href="https://booth.ai">
                See all images
              </Button>
            </Section>
            <Text style={text}>
              If you want to regenerate the images, you can always go to the dashboard.
            </Text>
            <Text style={text}>Cheers,<br />Booth AI Team</Text>
          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const fontFamily = "'Open Sans', 'Helvetica Neue', Arial";

const main = {
  backgroundColor: '#f2ecf8',
  padding: '10px 0',
};

const container = {
  margin: '0 auto',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 10px 0 rgb(15 15 15 / 15%)',
  borderRadius: '14px',
  width: '600px',
  padding: '45px',
};

const logo = {
  margin: '0 auto'
};

const preview = {
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '14px',
  boxShadow: '0 2px 10px 0 rgb(15 15 15 / 15%)',
  marginBottom: '20px',
};

const text = {
  fontFamily,
  fontSize: '16px',
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
};

const buttonContainer = {
  margin: '0 auto'
};

const button = {
  fontFamily,
  backgroundColor: '#6d51ef',
  borderRadius: '200px',
  color: '#fff',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '210px',
  padding: '14px 7px',
};