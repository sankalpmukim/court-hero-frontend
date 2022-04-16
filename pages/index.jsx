import React from 'react';
import Head from 'next/head';

import Hero from '../components/Hero';
import Content from '../components/Content';

export default function Index() {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Court Hero</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link
          href="https://uploads-ssl.webflow.com/6259e5fd193e9d7a24f3d537/css/harsh-avinashs-supercool-site.webflow.97d342d1c.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:regular" media="all" />
        <link href="https://uploads-ssl.webflow.com/img/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="https://uploads-ssl.webflow.com/img/webclip.png" rel="apple-touch-icon"></link>
      </Head>
      <main>
        <div className="nav">
          <img
            src="https://uploads-ssl.webflow.com/6259e5fd193e9d7a24f3d537/6259ec236a667e328fafed4a_Court%20Hero.svg"
            loading="lazy"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/6259e5fd193e9d7a24f3d537/6259ec23193e9d903df3f815_Vector.svg"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="w-container">
          <img
            src="https://uploads-ssl.webflow.com/6259e5fd193e9d7a24f3d537/6259ec236a667e328fafed4a_Court%20Hero.svg"
            loading="lazy"
            width="643"
            alt=""
            className="image"
          />
        </div>
        <h1 className="heading-3">Check. Trade. Play.</h1>
        <div className="div-block">
          <a
            href="/api/auth/login"
            className="button-3 w-button"
            style={{
              textDecoration: 'none',
              color: 'white'
            }}>
            <strong>Get Started</strong>
          </a>
        </div>
        <div className="div-block-2">
          <img
            src="https://uploads-ssl.webflow.com/6259e5fd193e9d7a24f3d537/6259f18f39304422e1a6fb7a_Group%201.svg"
            loading="lazy"
            alt=""
            className="image-2"
          />
        </div>
      </main>
    </>
  );
}
