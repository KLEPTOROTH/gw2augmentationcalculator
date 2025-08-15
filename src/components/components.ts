import Card from "./Card.astro";
import GifPlayer from "./GifPlayer.astro";
import Grid from "./Grid.astro";
import GridItem from "./GridItem.astro";
import Information from "./Information.astro";
import Label from "./Label.astro";
import ProfessionVideo from "./ProfessionVideo.astro";
import Tab from "./Tab.astro";
import Tabs from "./Tabs.astro";
import TextDivider from "./TextDivider.astro";
import Video from "./Video.astro";
import Warning from "./Warning.astro";
import Attribute from "./gw2-ui/Attribute.astro";
import Augmentation from "./gw2-ui/Augmentation.astro";
import Boon from "./gw2-ui/Boon.astro";
import CommonEffect from "./gw2-ui/CommonEffect.astro";
import Condition from "./gw2-ui/Condition.astro";
import ControlEffect from "./gw2-ui/ControlEffect.astro";
import Item from "./gw2-ui/Item.astro";
import MistlockInstability from "./gw2-ui/MistlockInstability.astro";
import Profession from "./gw2-ui/Profession.astro";
import Skill from "./gw2-ui/Skill.astro";
import Trait from "./gw2-ui/Trait.astro";
import Traits from "./gw2-ui/Traits.astro";
import Achievement from "./gw2/Achievement.astro";
import BuildLink from "./gw2/BuildLink.astro";
import CharacterWithAr from "./gw2/CharacterWithAr.astro";
import Character from "./gw2/character/Character.astro";
import Image from "./html-components/Image.astro";
import MDLink from "./html-components/MDLink.astro";
import hr from "./html-components/hr.astro";
import li from "./html-components/li.astro";
import ol from "./html-components/ol.astro";
import table from "./html-components/table.astro";
import Advanced from "./sections/Advanced.astro";
import Beginner from "./sections/Beginner.astro";
import ChallengeMode from "./sections/ChallengeMode.astro";
import NormalMode from "./sections/NormalMode.astro";

export const components = {
  hr,
  li,
  ol,
  a: MDLink,
  table,
  Achievement,
  Augmentation,
  Advanced,
  Attribute,
  Beginner,
  BuildLink,
  Boon,
  Boss: () => undefined,
  Card,
  Character,
  CharacterWithAr,
  ChallengeMode,
  Composition: () => undefined,
  Condition,
  Control: ControlEffect,
  Divider: TextDivider,
  Effect: CommonEffect,
  GifPlayer,
  Grid,
  GridItem,
  Image,
  Information,
  InformationBlock: () => undefined,
  Instability: MistlockInstability,
  Item,
  Label,
  NormalMode,
  ProfessionVideo,
  Skill,
  Skills: () => undefined,
  SpecialActionKey: () => undefined,
  Specialization: Profession,
  Tab,
  Tabs,
  Trait,
  Traits,
  Uncategorized: () => undefined,
  Video,
  Warning,
  Weapons: () => undefined,
};
