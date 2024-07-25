import { gri_2_1, gri_2_2, gri_2_3 } from '@/lib/disclosures/gri';

export interface IDisclosure {
  name?: string;
  code?: string;
  requirements?: Array<any>;
  instruction: string;
  prompt: string;
}

export interface IMainDisclosure {
  gri_2_1: IDisclosure;
  [key: string]: any;
}

export const mainDisclosure: IMainDisclosure = {
  gri_2_1: gri_2_1,
  gri_2_2: gri_2_2,
  gri_2_3: gri_2_3,
};
