//  icons
import { FiYoutube, FiInstagram, FiTwitter } from "react-icons/fi";
import { pngs } from "../assets/pngs";

export const MobileMenuData = [
    {
        title: "THE DOCK",
    },
    {
        title: "MINT",
    },
    {
        title: "MARKET",
    },
];

export const MinotaurNFTAddress = "0x38fEb322dE33cCc5E3e80fDcd76Ec718e19E120D";
export const StakingPoolAddress = "0x821DA46dC10c17AEF0C432Af5cC5A0190853304F";
export const OvolosAddress = "0x1b4d24C16D4e796B3f4E65EBef93604A8db9c6Eb";
export const MellonTokenSupply = 10000;
export const YparchosTokenSupply = 100;

// address on testnet
// export const DUCKNFTADDRESS = "0xA0D5623BEd2b9C7B38b5d62e78611aAe8945C94d";
// export const DUCKLINGNFTADDRESS = "0x64DdDF280748cB7239CBB03135F968D350C362de";
export const ALPHANFTADDRESS = "0x08A11f6b3cd1D38ED1a1454e97582004f833E091";
// export const BEEADDRESS = "0xc01FF397D159f651cd1765D42818a6cD32a0c3FC";

// address on mainnet

export const DUCKNFTADDRESS = "0x36d7b711390d34e8fe26ad8f2bb14e7c8f0c56e9";
export const DUCKLINGNFTADDRESS = "0xeb4a28587503d84dc29de8e4fc8bf0a57a7ddb0d";
export const BEEADDRESS = "0xbABC5C62bce1c34148f33D825bf8A5D93f534fEf";

export const OPENSEA_TESTNET_API =
    "https://testnets-api.opensea.io/api/v1/assets";

export const OPENSEA_MAINNET_API = "https://api.opensea.io/api/v1/assets/";

// navigation
export const navigation = [
    {
        name: "home",
        href: "home",
    },
    {
        name: "about us",
        href: "about",
    },
    {
        name: "Collections",
        href: "portfolio",
    },
    {
        name: "Pondmap",
        href: "pondmap",
    },
    {
        name: "Team",
        href: "services",
    },
];

// social
export const social = [
    {
        icon: <FiInstagram />,
        href: "https://www.instagram.com/okayduckyc/",
    },
    {
        icon: <FiTwitter />,
        href: "https://twitter.com/OkayDuckYC",
    },
];

// projects
export const projectsData = [
    {
        id: "1",
        image: pngs.duck,
        name: "Okay Duck Yacht Club",
        category: "First Collection",
        href: "https://opensea.io/collection/okayduckyachtclub",
    },
    {
        id: "2",
        image: pngs.duckling,
        name: "Ducklings",
        category: "Second Collection",
        href: "https://opensea.io/collection/ducklingsodyc",
    },
];

// services
export const services = [
    {
        image: pngs.astros,
        name: "Astros",
        description: "Lead Developer - Duck me",
    },
    {
        image: pngs.richie,
        name: "Farmer Richie",
        description: "Project Manager - Ass tat at 10 ETH FP",
    },
    {
        image: pngs.ash,
        name: "Ashtastic",
        description: "Project Manager - Here for a ducktastic time",
    },
    {
        image: pngs.ducky,
        name: "DuckyWucky",
        description: "Collab Manager - Got any grapes?",
    },
    {
        image: pngs.nonny,
        name: 'Nonny',
        description:
          'Artist - Dicks',
      },
];
