import { StoryFn, Meta } from "@storybook/react";
import Comments from "../components";

export default {
  title: "ReactComponentLibrary/Comments",
  component: Comments,
} as Meta<typeof Comments>;

const Template: StoryFn<typeof Comments> = (args) => <Comments {...args}></Comments>;

export const CommentsTest = Template.bind({});
CommentsTest.args = {
  workspaceId: "680240fb3ee29420e0824504",
  pageUrl: "http://localhost:3002/post/page-link-id",
  pageId: "page-link-id",
  pageTitle: "Post Title",
};

export const CommentsSecondary = Template.bind({});
CommentsSecondary.args = {
  workspaceId: "680240fb3ee29420e0824504",
  pageUrl: "http://localhost:3002/post/page-link-id-2",
  pageId: "page-link-id-2",
  pageTitle: "Post Title 2",
};