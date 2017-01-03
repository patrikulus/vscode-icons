/* tslint:disable max-line-length */
import {
  IExtensionCollection,
  IFolderExtension,
  FileFormat,
  ISpecialFolderCollection,
  SpecialExtensionType,
} from '../../src/models';

export const extensions: (IExtensionCollection<IFolderExtension> & ISpecialFolderCollection) = {
  special: {
    folder: { icon: 'folder', type: SpecialExtensionType.folder, format: FileFormat.svg },
  },
  supported: [
    { icon: 'aws', extensions: ['aws', '.aws'], format: FileFormat.svg },
  ],
};
