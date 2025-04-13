import { Akshay } from "./devInfo";
import { syncProjectsToFileSystem } from "./syncProjects";

export const fileSystem: FileSystem = {
  home: {
    about: `
${Akshay.about}

Programming Languages:
${Akshay.code.join(", ")}

Frameworks:
${Akshay.frameWorks.join(", ")}

Tools Used:
${Akshay.toolsUsed.join(", ")}

IDEs:
${Akshay.ides.join(", ")}
    `,
    projects: {},
    interests: `
${Akshay.interests.join("\n")}
    `,
  },
};

syncProjectsToFileSystem(fileSystem);

export interface FileSystem {
  [key: string]: string | FileSystem;
}
