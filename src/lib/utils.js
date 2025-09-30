import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import communicationAnimationData from '../assets/Communication.json';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const colors = [
  'bg-[#2563EB]/70 text-[#2B9BFD] border-[2px] border-[#2563EB]',
  'bg-[#07D800]/70 text-[#2BFD47] border-[2px] border-[#07D800]',
  'bg-[#C10000]/70 text-[#FD2B2B] border-[2px] border-[#C10000]',
  'bg-[#B70098]/70 text-[#FD2BD7] border-[2px] border-[#B70098]',
];

export const getColor = (color) => {
  if (color >= 0 && color < colors.length) {
    return colors[color];
  }
  return colors[0];
};

export const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: communicationAnimationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
