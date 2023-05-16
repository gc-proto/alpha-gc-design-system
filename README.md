# Alpha GC Design System

We are researching the traits of successful design systems from the Storybook community to identify best practices. This repo reveals the automated tooling and careful workflows used in scaled production design systems. 

## What we’re building
Storybook powers the design systems for BBC, Airbnb, IBM, GitHub, and hundreds more companies. The recommendations here are inspired by best practices and tools from the smartest teams. We’ll be building the following frontend stack:

Component Development Stack:
- **Storybook**: A comprehensive tool for developing UI components and generating auto-documented references.
- **Enhance**: Provides a dependable foundation built on standards-based web platform features, allowing developers to create web applications that are lightweight, flexible, and future-proof.
- **open-props**: Enables component-specific styling, keeping your styles neatly encapsulated.
- **Prettier**: Automatically formats your code for a consistent and polished appearance.

System Maintenance:
- **GitHub Actions**: Facilitates continuous integration to ensure a smooth development workflow.
- **ESLint**: Performs JavaScript linting to catch potential errors and maintain code quality.
- **Chromatic**: A tool endorsed by the Storybook maintainers that detects visual bugs in your components.
- **npm**: The reliable choice for distributing your library.
- **Auto**: Simplifies release management through an efficient workflow.

Storybook Add-ons:
- **Accessibility**: Helps identify and resolve accessibility issues during the development process.
- **Actions**: Allows for thorough quality assurance testing of click and tap interactions.
- **Controls**: Empowers you to interactively adjust props and experiment with different component configurations.
- **Docs**: Automatically generates comprehensive documentation based on your component stories.
- **Interactions**: Facilitates debugging of component interactions.
- **Localization**: A Storybook add-on specifically designed for working with HTML web components and providing localization capabilities.
- **Test-runner**: Automates component testing for swift and reliable results.

## Understand the workflow
Design systems are an investment in frontend infrastructure. In addition to showcasing how to use the technology above, this repo also focuses on core workflows that promote adoption and simplify maintenance. Wherever possible, manual tasks will be automated. Below are the activities we’ll encounter.

### Build UI components in isolation
Every design system is composed of UI components. We’ll use Storybook as a “workbench” to build UI components in isolation outside of our consumer apps. Then we’ll integrate timesaving addons that help increase component durability (Actions, A11y, Controls, Interactions).

### Review to reach consensus and gather feedback
UI development is a team sport that requires alignment between developers, designers, and other disciplines. We’ll publish work-in-progress UI components to loop stakeholders into the development process so we can ship faster.

### Test to prevent UI bugs
Design systems are a single source of truth and a single point of failure. Minor UI bugs in basic components can snowball into company-wide incidents. We’ll automate tests to help you mitigate the inevitable bugs to ship durable, accessible UI components with confidence.

### Document to accelerate adoption
Documentation is essential, but creating it is often a developer’s last priority. We’ll make it much easier to document UI components by auto-generating minimum viable docs which can be further customized.

### Distribute the design system to consumer projects
Once we have well-documented UI components, we need to distribute them to other teams. We’ll explore packaging, publishing, and how to surface the design system in other Storybooks.

### Storybook Design System
This repo’s example design system was inspired by Storybook’s own production design system. It is consumed by three sites and touched by tens of thousands of developers in the Storybook ecosystem.
