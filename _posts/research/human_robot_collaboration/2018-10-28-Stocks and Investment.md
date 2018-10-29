---
title: "Stock and Investment"
img: bear_bull_market_thubnail.jpg
img-thumb: bear_bull_market_thubnail.jpg
alt: Situated-Human-Robot-Collaboration
tags: [research,robotics,baxter,hri,human robot interaction,collaborative manufacturing,human robot collaboration,advanced manufacturing,open source,github]
authors: Cesar Galan
double: yes
---


This project was motivated after I started investing for about a year using apps like Stash and RobinHood. This apps are great to start investing for someone who does not have a lot of money to start and for that I am greatful. I have always had a dream to learn how to properly invest in the stock market and correctly manage my money. 

In these app although it is simple to invest it is not so easy to view your progress over time. Thus I decided to create an application named [stock and finances](https://github.com/galanCA/Stocks-and-Investment) that can help me see the progress over time. This will be my first level of success for this project.

The second level of success is to implement a screener based on some techniques that I learned by reading different books such as ** The Intelligent Investor** by Benjamin Graham. That way I can continuesly be looking for opportunities using fudamental analysis.

The third level of success will be to create a machine learning algorithm that can help predict the stock market using technical analysis with at least 60% accuracy. I understand that some might think that it will be imposible since if it is. It will make you richer than your wildest dreams, but I enjoy working on hard or difficult projects.

## Currrent Progress

At this time the application can read all your portafolio and add all your investment to give you a percentage and total value return. Later on I would like to add the historical version of your portafolio in order to get a more accurate graph of the investments.

## How to use it

~~~python
# Ticker:Number of shares:Amount Invested
APPL:1:100
~~~

Research in human teamwork shows that a key element of fluid and fluent interactions is the interpretation of implicit verbal and non-verbal cues _in context_.
This poses an issue to robotic platforms, as they work best when controlled through explicit commands that employ structured, unequivocal representations of the external world and their human partners.
In this work, we present a framework for effectively grounding situated and naturalistic speech to action selection during human-robot collaborative activities.

{% include video.html url="//www.youtube.com/embed/pSdN9NJg_EI" description="Video summary of the proposed work." %}

## Method

We propose a flexible approach for incrementally deriving a model of the desired robot’s behavior from utterances and context. This is accomplished by maintaining and updating distinct models of the speech and the context in relation with robot actions, the outputs of which are combined for action selection.
For a given utterance and the associated context, each model yields a probability distribution over actions (cf. Fig 1).

{% include image.html url="portfolio/SituatedHRC_architecture.jpg" max-width="80%" description="<b><i>Figure 1</i></b>. Software architecture." %}

Here context refers to both the presence of objects in the workspace but also the action history of the robot-the sequence of successful actions taken up until the current moment. For the purpose of this experiment we introduce a simple context model that records counts of actions taken in any context. We use a speech model based on logistic regression. Each utterance command is converted by the speech-to-text system and then represented as a bag of n-grams of size one and two. These embeddings are then passed to the logistic regression which attempts to classify the utterance to a particular robot action.

## Experimental Results

We evaluate the efficacy of the system on a collaborative construction task with an autonomous robot and human participants. We first demonstrate that our system is capable of acquiring and deploying new task representations from limited and naturalistic data sets, and without any prior domain knowledge of language or the task itself. Finally, we show that our system is capable of significantly improving performance on an unfamiliar task after a one-shot exposure.
This suggests that the system develops approximate yet adaptable representations of tasks which can be generated quickly, but also deviated from should it be required.
