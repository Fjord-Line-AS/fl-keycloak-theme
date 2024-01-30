import { createPageStory } from "../createPageStory";

const { PageStory } = createPageStory({
    pageId: "register.ftl"
});

export default {
    title: "login/Register",
    component: PageStory,
} 



export const Default = () => <PageStory />;

export const WithoutPasswordField = () => (
    <PageStory

    />
);


