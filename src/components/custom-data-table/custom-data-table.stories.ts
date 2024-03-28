import type { Meta, StoryObj } from '@storybook/react';

import { CustomDataTable } from '.';

const defaultArgs = {
    title: 'Custom title',
    columns: [
        { field: 'name', headerName: 'Name header 1', width: 200}, 
        { field: 'count', headerName: 'Name header 2', width: 200}
    ],
    rows: [
        {name: 'example 1', count: 22151}, 
        {name: 'example 2', count: 11525}, 
        {name: 'example 3', count: 1444}
    ],
    rowCount: 10000,
    page: 0,
    pageSize: 25,
}

const meta: Meta<typeof CustomDataTable> = {
  component: CustomDataTable,
  tags: ['autodocs'],
  args: defaultArgs
};

export default meta;
type Story = StoryObj<typeof CustomDataTable>;

export const DefaultView: Story = {
    args: {}
}

export const LoadingView: Story = {
  args: {
    isLoading: true
  },
};

export const ErrorView: Story = {
    args: {
        isError: true
    },
  };