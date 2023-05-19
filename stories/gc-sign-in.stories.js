import { createSignin } from "./gc-sign-in";

export default {
    title: "Components/Contextual sign in",
    tags: ["autodocs"],
    render: (args) => createSignin(args),
    parameters: {
        layout: "centered"
    },
    argTypes: {
        link: {
            defaultValue: "http://test.canada.ca/wayfinding-orientation-2023/government/sign-in-online-account.html",
        },
        label: {
            defaultValue: "Sign in",
            control: "text",
            description: "Label set as default on small and large screen"
        },
        labelExtended: {
            control: "text",
            defaultValue: "",
            description: "Label set as default on large screen",
        },
        locales: {
            control: { type: "select" },
            options: [ "en", "fr" ],      
        }
    },
}

export const Default = {
    args: {
        label: "Sign in",
    }
}
export const English = {
    args: {
        locales: "en",
        labelExtended: "Sign in to IRCC",
    }
}

export const Français = {
    args: {
        locales: "fr",
        labelExtended: "Se connecter à IRCC",
    }
}