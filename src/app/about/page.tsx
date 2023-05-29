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

export default function About() {
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
            priority
            src="/profile-illu.png"
            alt="profile image"
            width={270}
            height={270}
          />
        </Box>
        <Box>
          <Typography
            fontWeight={700}
            marginBottom={1}
          >{`안녕하세요, 로리입니다.`}</Typography>
          <Typography whiteSpace="pre-line">{`글쓰기를 좋아하고, 웹 개발에 관심이 있습니다. 최근에는 인디-웹 개발자로 활동하며 다양한 프로젝트를 진행해보고 있습니다.`}</Typography>
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
