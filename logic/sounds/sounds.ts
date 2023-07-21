import { ISounds } from "../models/sounds";

export const sounds: ISounds = { 
    defenderShooting: new Audio('./sounds/shoot.wav'),
    alienDeathSound: new Audio('./sounds/invaderkilled.wav'),
    backgroundMusic: new Audio('./sounds/spaceinvaders1.mpeg'),
    mothershipSoundHighPitch: new Audio('./sounds/ufo_highpitch.wav'),
    mothershipSoundLowPitch: new Audio('./sounds/ufo_lowpitch.wav'),
}

