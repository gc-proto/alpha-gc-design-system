# Alpha GC Design System

We are researching the traits of successful design systems from the Storybook community to identify best practices. This repo reveals the automated tooling and careful workflows used in scaled production design systems. 

## What we’re building
Storybook powers the design systems for BBC, Airbnb, IBM, GitHub, and hundreds more companies. The recommendations here are inspired by best practices and tools from the smartest teams. We’ll be building the following frontend stack:

**Build components**
- 📚 Storybook for UI component development and auto-generated docs
- 🔧 Web Components for declarative component-centric UI
- 💅 Styled-components for component-scoped styling
- ✨ Prettier for automatic code formatting

**Maintain the system**
- 🚥 GitHub Actions for continuous integration
- 📐 ESLint for JavaScript linting
- ✅ Chromatic to catch visual bugs in components (by Storybook maintainers)
- 📦 npm for distributing the library
- 🛠 Auto for release management workflow

**Storybook addons**
- ♿ Accessibility to check for accessibility issues during development
- 💥 Actions to QA click and tap interactions
- 🎛 Controls to interactively adjust props to experiment with components
- 📕 Docs for automatic documentation generation from stories
- 🔍 Interactions for debugging component interactions
- 🏎 Test-runner for automated component testing

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
