import React, { Component } from 'react'
import CV from 'react-cv'

export function Resume () {

    return (
        <CV
        personalData={{
            name: 'Sahil Singla',
            title: 'Software Developer',
            image: 'https://bulma.io/images/placeholders/128x128.png',
            contacts: [
                { type: 'email', value: 'sahilsingla25@yahoo.com' },
                { type: 'phone', value: '+61 432770249' },
                { type: 'location', value: 'Perth, Western Australia' },
                { type: 'linkedin', value: 'https://www.linkedin.com/in/saahilsiingla/' },
            ]}}
            sections= {[{
                type: 'text',
                title: 'Career Profile',
                content: 'Results-focused, IT professional with strength in development, programming, technology and cloud computing. Proactive leader with strengths in communication and collaboration. Proficient in leveraging in front end and cloud services knowledge to promote in the community. Adept at managing concurrent objectives to promote efficiency and influence positive outcomes.',
                icon: 'usertie'
            },
            {
            type: 'common-list',
            title: 'Education',
            icon: 'graduation',
            items: [
              {
                title: 'Masters in Information Technology',
                authority: 'RMIT University',
                authorityWebSite: 'https://rmit.edu.au',
                rightSide: '2019 - 2021'
              },
              {
                title: 'Bachelor in Computer Science',
                authority: 'Chitkara University',
                authorityWebSite: 'https://chitkara.edu.in',
                rightSide: '2014 - 2018'
              },
              {
                title: 'Bachelor in Computer Science',
                authority: 'Chitkara University',
                authorityWebSite: 'https://chitkara.edu.in',
                rightSide: '2014 - 2018'
              }
            ]
          },
          {
            type: 'experiences-list',
            title: 'Experiences',
            icon: 'archive',
            items: [
              {
                title: 'Graduate Trainee (AWS Bussiness Unit)',
                company: 'Tata Consultancy Service Australia & New Zealand',
                description: 'Working as a AWS Cloud Engineer / React Developer',
                companyWebSite: 'http://tcs.com',
                datesBetween: '14/03/2022 - Present',
            
              },
              {
                title: 'React Developer',
                company: 'Shine Solutions Group PVT LTD',
                description: 'I was working as a react / front-end developer',
                datesBetween: 'March 2021 - June 2021'
              },
             
            ]
          },
         
          {
            type: 'common-list',
            title: 'Certification',
          
            icon: 'comments',
            items: [
              {
                title: 'Full Stack Web development',
                authority: 'Udacity',
                authorityWebSite: 'https://in.udacity.com'
              },
            ]
          },

          {
            type: 'tag-list',
            title: 'Skills Proficiency',
            icon: 'rocket',
            items: ['React', 'Javascript', 'CSS', 'SQL', 'Adobe Dreamweaver', 'Adobe Photoshop']
          },
          {
            type: 'tag-list',
            title: 'Hobbies & Interests',
            icon: 'cubes',
            items: ['Photography', 'Gardening', 'Football', 'Cricket']
          }
        
        ]}
            branding={false} // or false to hide it.
            />
            )
            
        }
    
    
