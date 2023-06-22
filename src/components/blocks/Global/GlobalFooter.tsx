"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer: React.FC = () => {
  const contactInfo = [
    // email
    {
      url: "mailto: mitty0304@naver.com",
      title: "Email",
      icon: <EmailIcon />,
    },
    // LinkedIn
    {
      url: "https://www.linkedin.com/in/eunsoosa/",
      title: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    // GitHub
    {
      url: "https://github.com/Rory0304",
      title: "GitHub",
      icon: <GitHubIcon />,
    },
  ];

  return (
    <footer>
      <Box paddingX={3} paddingY={5} borderTop={(theme) => `1px solid ${theme.palette.divider}`}>
        <Container maxWidth="md">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2">
              © 2023 Rory. All rights reserved.
            </Typography>
            <Stack direction="row" alignItems="center" gap={1}>
              {contactInfo.map((contact) => (
                <Link
                  key={contact.url}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.icon}
                </Link>
              ))}
              <Link href="/rss.xml">
                <RssFeedIcon />
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
