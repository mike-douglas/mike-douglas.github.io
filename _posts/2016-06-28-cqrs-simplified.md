---
title: CQRS Simplified
layout: post
author: miked
excerpt_separator: <!--more-->
tags: [engineering, architecture]
---

<div class="excerpt">
A brief introduction to the CQRS pattern and how it compares to a more familiar pattern, REST.
</div>

<!--more-->

CQRS, or Command Query Responsibility Separation, is an architectural pattern that usually consists of separate implementations of data models for changing/updating data and displaying data. It’s a different way of solving the problem that CRUD architectures solve: how does a system address changes and additions to its data collection? How does that system also handle displaying and representing items from that collection?

When I first learned about CQRS, it was hard to step back and think of how it would even work because, in general, I’m very RESTful in my architectural thinking these days. I’m hardwired to see CRUD as a natural solution to handling data models. This doesn’t need to be the case! CQRS offers some flexibility that CRUD just doesn’t have.

While CRUD (Create, Update, Destroy) uses the same data model to represent changes-to and display-of entities within a system, CQRS separates these two ideas. Why would you do this? How might CQRS fit in to an ecosystem dominated by RESTful thinking? Let’s start with a recap of REST.

# REST Loves CRUD

REST and CRUD, in many ways, are interchangeable. When I interview developer candidates one of my questions is always about RESTful API design. Most answers include some talk about how REST provides a one-to-one mapping to CRUD operations: POST to create, PUT to update, DELETE to destroy, GET to query.

It’s not by accident that this is the case. REST is a resource-based architecture, so the primary focus is around those resources. You create a resources that looks like X. You expect that resource, once created, to be retrievable in the exact same way through some other operation.

For many applications and architectures this is the perfect way to handle model interactions. Sometimes your application needs to do something different. This is where CQRS may come in.

# Command and Query

The most important conceptual difference between CRUD and CQRS is what each addresses when you ask this question of how your application deals with its data entities:

> I want to _verb_ my _data entity_ (noun).

In a very general sense, CRUD focuses on the noun part of that statement, and CQRS focuses on the verb (the command). More specifically:

A CRUD architecture is focused on what data model your application interacts with: its operations against those models are centered around replacing, creating, deleting and querying those exact data models.

A CQRS architecture focuses on how your application interacts with the entities of the application, and promotes that the data model can look differently depending on how you’re interacting with those entities.

CQRS allows the developer to concern themselves with the action performed within the system rather than the data model you perform it on. There may be many "Commands" that the system implements that each take a data model that is different. In addition, querying the dataset may return a model in an entirely different form. Hopefully you’re starting to see some useful aspects of this architecture!

# CQRS and REST

Admittedly because REST so easily mirrors the approach of CRUD, it’s hard to think about how it might work with data models that interact by a CQRS architecture.

CQRS can fit into any architecture though: although REST may expose a resource-based API, behind each route or handler (assuming you’re using a route-based framework), you can create a layer of services behind that API that uses Commands with distinct data models for each. If the problem to solve is one that involves complex and varied data types, you may already be doing this to some degree. In fact, the more I think about it, the more I begin to realize I’ve actually used a form of CQRS in projects in the past without even knowing it.

# When to Use CQRS

Knowing about CQRS has convinced me that neither it nor CRUD can perfectly solve every scenario. Invariably you will come up against your decision to use one or the other when you build something that is even slightly complex.

These are some things to think about that might inform your decision on whether CQRS is right for your project:

1. Does the data structure used to populate and update your system need to be the same as the one you use to retrieve that data?
2. Will there be multiple ways of querying the data that retrieves model objects in different forms (not formats)?
3. Is the model for the structure using actually a smaller piece of a larger data model?

Understanding another architecture is a valuable tool, not just as a different option or solution to your problem but it’s also that just knowing that there’s not one way to do something opens up your a lot of really useful avenues. Hopefully next time you take on a project, you consider how the data models and interactions should be architected and whether it would benefit from a CQRS over a CRUD-based one.