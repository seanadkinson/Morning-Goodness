import Link from 'next/link';
import Layout from '../components/Layout';
import { Box } from '@chakra-ui/react';

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <Box w="100%" h="200px" bgGradient="linear(to-r, green.200, pink.500)" />
    </p>
  </Layout>
);

export default AboutPage;
