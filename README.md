This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It's not important that you know what any of that means though. If you're interested in following along with my video that I made, then you can just use the following commands to clone the repo and follow along.

## Prerequisites

Running this repo requires NodeJS being installed. I recommend using the LTS version of NodeJS and installing using [nvm](https://github.com/nvm-sh/nvm) (basically RVM but for Node versions). I'm using Node version `12.18.3`.

This repo uses Yarn for package management; think of it like Bundler but for [npm packages](https://npmjs.com/). To install Yarn, run the following:

```
npm install -g yarn
```

`npm` is the default package manager in Javascript world. The `install` command installs a specific package, and the `-g` flag just installs it globally. Packages installed in Javascript world are installed _locally by default_, not globally like with gems. You'll use the `-g` to almost exclusively install CLI utilities, which Yarn is.

## Installation

Now, let's clone the directory:

```
git clone https://github.com/samwightt/nextjs-styled-components-starter/
```

You can optionally add a folder after the URL to clone it to a specific directory. Git will work for a minute, and then the directory should appear in that folder. CD into it:

```
cd nextjs-styled-components-starter
```

Now we need to install all of the packages the project requires. Run the following to get Yarn to install all of the project's packages:

```
yarn
```

Wasn't that simple? Yarn should work for a minute or two and then should show a `success` flag at the end with a `Done in xs.` with a sparkle before it. CLI packages in Javascript world have a personality. :D

Last, to actually run the project, run the following:

```
yarn dev
```

This uses an [_npm script_, basically a shorthand for another command](https://medium.com/@mxstbr/npm-scripts-explained-f125e85eb378). These are defined in the `package.json` file under the `scripts` property; you should see that the `dev` property on that object looks like this:

```
    "dev": "next dev",
```

However, if you try to run this in your terminal it won't work. Why is that? Well NPM scripts run _inside the context of your local folder_. All of the CLI packages you install _locally_ get added to the scope of an NPM script. If you want to run a CLI package that you installed locally in the project, you can just prefix the command with `npx`. This will install the package if necessary and then run it. Try this:

```
npx next dev
```

It should give you the same result as running `yarn dev`.

After running `yarn dev`, you should be able to visit `localhost:3000` and see a page there with "Hello world" in an `h1`. Congrats, you've installed things correctly!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
