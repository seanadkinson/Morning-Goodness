import Link from 'next/link';
import Layout from '../components/Layout';
import { Box } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Input,
  Select,
} from '@chakra-ui/react';

const AddModulePage = () => (
  <Layout title="Add Module">
    <Heading>Add Module</Heading>

    <FormControl>
      <FormLabel>Type</FormLabel>
      <Select placeholder="Select Type">
        <option value="family">Family</option>
        <option value="faith">Faith</option>
      </Select>
    </FormControl>

    <FormControl>
      <FormLabel>Title</FormLabel>
      <Input type="title" />
    </FormControl>
  </Layout>
);

export default AddModulePage;
