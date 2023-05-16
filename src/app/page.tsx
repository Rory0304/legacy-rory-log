"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Stack,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
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
    <div>
      <Stack
        direction="row"
        component="article"
        alignItems="center"
        columnGap={3}
        paddingY={3.5}
      >
        <Box>
          <Image
            src="/profile.png"
            alt="profile image"
            width={270}
            height={270}
          />
        </Box>
        <Box>
          <Typography fontWeight={700}>{`Hello, I'm Rory.`}</Typography>
          <Typography whiteSpace="pre-line">{`I enjoy writing and I'm interested in web development. Recently, I've been working as indie web developer.`}</Typography>
        </Box>
      </Stack>

      <Divider />
      <Stack paddingY={3.5}>
        <Typography
          variant="h5"
          component="h2"
          fontWeight={800}
          marginBottom={2}
        >
          Contact.
        </Typography>
        <List>
          {contactInfo.map((contact) => (
            <ListItem key={contact.url}>
              <Link
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Stack direction="row" alignItems="center">
                  <ListItemIcon
                    sx={{
                      minWidth: 32,
                    }}
                  >
                    {contact.icon}
                  </ListItemIcon>
                  <ListItemText>{contact.title}</ListItemText>
                </Stack>
              </Link>
            </ListItem>
          ))}
        </List>
      </Stack>
    </div>
  );
}
