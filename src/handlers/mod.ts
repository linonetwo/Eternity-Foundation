/* eslint-disable no-await-in-loop */
import { ipcMain } from 'electron';
import path from 'path';
import fs from 'fs-extra';
import { modFolder } from '../constants/paths';
import { Mod } from '../constants/handlerNames';

ipcMain.handle(Mod.loadModList, () => fs.readdir(modFolder));

ipcMain.handle(Mod.loadModInitializationScript, async (_, { modName }) => {
  const modInitializationScriptLocation = path.join(modFolder, modName, 'scripts', 'init.js');
  const initializationScriptContent = await fs.readFile(modInitializationScriptLocation, 'utf-8');
  return initializationScriptContent;
});

ipcMain.handle(Mod.getTexture, async (_, { modName, texturePath }) => {
  const textureLocation = path.join(modFolder, modName, 'textures', texturePath);
  const result = await fs.readFile(textureLocation, 'base64');
  return `data:image/png;base64,${result}`;
});
