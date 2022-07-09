---
title: Fix code samples in Ghost with Prism in 2022
slug: fixing-syntax-highlighting-in-ghost-with-prism
date: 2022-05-19
date_published: 2022-05-19T02:38:07.000Z
date_updated: 2022-05-19T03:02:47.000Z
tags:
  - post
  - Coding
  - Reference
excerpt: How to fix broken code sample highlighting with modern versions of Ghost and Prism in 2022
---

The [tutorial from Ghost on setting up Prism syntax highlighting](https://ghost.org/docs/tutorials/code-syntax-highlighting/) is old and outdated, it uses Prism 1.19.x and the most recent is version in mid-2022 is 1.28.x.

Most of the tutorial is still applicable – copy the CSS and the JS for `prism.min.(css|js)` like instructed, and place them in the header and footer of your site respectively. After you complete the tutorial, you'd expect (like I did) that highlighting would work. With recent versions of Prism, it doesn't.

**To fix code samples using a modern version of Prism, you must do this additional final step:**

In the list of files in [CDNJS for Prism](https://cdnjs.com/libraries/prism), make sure to add the `prism-autoloader` script tag to your footer:
![](__GHOST_URL__/content/images/2022/05/Screen-Shot-2022-05-18-at-10.32.11-PM.png)
This additional script will detect the languages it needs to load additional syntax js/css files for. In newer versions of Prism, this has been split out into this new module that you need to include for syntax highlighting to work fully.

Your "Site Footer" section in Ghost admin Code Injection settings will look something like this:
![](__GHOST_URL__/content/images/2022/05/Screen-Shot-2022-05-18-at-10.36.13-PM.png)
Once you save, your code samples should now have the correct syntax highlighting features!
