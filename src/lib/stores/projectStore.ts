import { writable } from 'svelte/store';
import type { ProjectData } from '../types/projectType';

const initialProjects: ProjectData[] = [
  {
    id: 'Arcadia',
    name: 'Arcadia Rivals',
    icon: 'go',
    shortDescription: 'Arcadia: Rivals is a strategy-based game where you collect powerful mini-conquerors known as minicons and challenge opponents',
    readmeUrl: 'https://raw.githubusercontent.com/codx-aks/readme-s/main/arcadia.md',
    technologies: ['Go','RedisDB','MySQL', 'Gin', 'Gorm'],
    githubUrl:'https://delta.nitt.edu/projects/arcadia-rivals',
    type: 'application'
  },
  {
    id: 'SIH',
    name: 'DHexagon',
    icon: 'go',
    shortDescription: 'Employee Management and Caller Sentiment/Problem Analysis Tool for Help-Desks',
    readmeUrl: 'https://raw.githubusercontent.com/codx-aks/readme-s/main/sih.md',
    technologies: ['Python', 'Tensorflow', 'Numpy', 'Flask', 'Matplotlib'],
    githubUrl: 'https://github.com/dHexagon',
    type: 'application'
  },
  {
    id: 'festy',
    name: 'Festember Mobile Application',
    icon: 'go',
    shortDescription: 'Android mobile application for Festember, NIT Trichy\'s premier cultural festival',
    readmeUrl: 'https://raw.githubusercontent.com/codx-aks/readme-s/main/festy.md',
    technologies: ['Kotlin', 'RoomDB', 'Android Studios', 'XML'],
    githubUrl:'https://play.google.com/store/search?q=festember&c=apps&hl=en_IN',
    type: 'application'
  },
  {
    id: 'DataForce',
    name: 'DataForce',
    icon: 'go',
    shortDescription: 'Making the Public IPFS (Interplanetary File System) as your data-locker and creating a data marketplace',
    readmeUrl: 'https://raw.githubusercontent.com/codx-aks/readme-s/main/dataforce.md',
    technologies: ['BlockChain', 'Flask', 'Etherlink', 'Pinata IPFS', 'Remix IDE', 'MetaMask', 'Solidity'],
    githubUrl:'https://sudoforce-tezos.vercel.app/',
    type: 'application'
  },
  {
    id: 'watchbox',
    name: 'Watch Box',
    icon: 'go',
    shortDescription: 'An IOT & AI Based Tool to ensure Construction Worker Safety',
    readmeUrl: 'https://raw.githubusercontent.com/codx-aks/readme-s/main/watchbox.md',
    technologies: ['Kotlin', 'WearOS', 'Android Studios', 'XML', 'Flask', 'Tensorflow', 'Python'],
    githubUrl:'https://github.com/codx-aks/WatchBox',
    type: 'application'
  },
  {
    id: 'surf',
    name: 'Surf',
    icon: 'go',
    shortDescription: 'Campus-wide peer assistance and connectivity app',
    readmeUrl: 'https://raw.githubusercontent.com/codx-aks/readme-s/main/surf.md',
    technologies: ['Kotlin', 'Firebase', 'Android Studios', 'XML'],
    githubUrl:'https://github.com/codx-aks/surf',
    type: 'application'
  },
  {
    id: 'trinitt',
    name: 'gemma-square',
    icon: 'go',
    shortDescription: 'Robust platform for comprehensive analysis and captioning of remotely sensed images',
    readmeUrl: 'https://raw.githubusercontent.com/codx-aks/readme-s/main/gemma.md',
    technologies: ['Flask', 'Tensorflow', 'Python'],
    githubUrl:'https://github.com/gemma-square',
    type: 'application'
  },
  {
    id: 'rs',
    name: 'Event Recommendation System',
    icon: 'go',
    shortDescription: 'Event Recommendation System with Hybrid Memory-Based Approach and GNN Model',
    readmeUrl: 'https://raw.githubusercontent.com/codx-aks/readme-s/main/rs.md',
    technologies: ['Kotlin', 'WearOS', 'Android Studios', 'XML', 'Flask', 'Tensorflow', 'Python'],
    githubUrl:'https://github.com/codx-aks/recSystem',
    type: 'application'
  },
  {
    id: 'rl',
    name: 'RL for FPS games',
    icon: 'go',
    shortDescription: 'Reinforcement Learning Algorithms for First-Person Shooter Environments',
    readmeUrl: 'https://raw.githubusercontent.com/codx-aks/readme-s/main/rl.md',
    technologies: ['openai/gym', 'Tensorflow', 'Python'],
    githubUrl:'https://github.com/codx-aks/RL',
    type: 'application'
  },
];

export const projects = writable<ProjectData[]>(initialProjects);