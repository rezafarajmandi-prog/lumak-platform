'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from '@/components/LanguageProvider';

type NavItem = {
  id: string;
  label: string;
  href: string;
  columns: Array<{
    title: string;
    links: Array<{ label: string; href: string }>;
  }>;
};

type NavigationState = {
  pathname: string;
  activeMenu: string | null;
  mobileOpen: boolean;
  mobilePanel: string | null;
  searchOpen: boolean;
};

const triluxSearchPath =
  'M 964.500 1.053 C 844.580 8.539, 736.659 33.560, 627 79.301 C 524.296 122.141, 429.492 181.520, 345 255.925 C 313.159 283.965, 272.383 325.549, 243.436 359.500 C 112.414 513.176, 28.323 707.470, 6.044 908 C 2.141 943.128, 0.863 965.383, 0.303 1008 C -0.291 1053.172, 0.574 1078.210, 4.052 1116.500 C 19.285 1284.245, 77.284 1447.702, 172.038 1589.927 C 212.220 1650.242, 251.939 1698.298, 303.996 1749.587 C 367.766 1812.416, 430.366 1860.388, 507.290 1905.376 C 634.931 1980.026, 782.420 2027.153, 930 2040.446 C 988.396 2045.706, 1054.895 2045.706, 1114.500 2040.446 C 1224.253 2030.761, 1332.056 2002.686, 1437 1956.456 C 1460.075 1946.292, 1508.857 1921.632, 1530.881 1908.999 C 1581.880 1879.746, 1631.255 1845.591, 1674 1809.996 C 1680.325 1804.729, 1686.115 1800.041, 1686.867 1799.578 C 1687.863 1798.966, 1781.127 1891.596, 2030.867 2141.241 C 2219.315 2329.617, 2375.525 2485.091, 2378 2486.737 C 2384.827 2491.279, 2391.763 2494.559, 2400.025 2497.152 C 2406.488 2499.180, 2409.463 2499.489, 2422 2499.433 C 2434.463 2499.378, 2437.626 2499.023, 2444.513 2496.903 C 2469.160 2489.319, 2489.319 2469.160, 2496.903 2444.513 C 2499.023 2437.626, 2499.378 2434.463, 2499.433 2422 C 2499.489 2409.463, 2499.180 2406.488, 2497.152 2400.025 C 2494.559 2391.763, 2491.279 2384.827, 2486.737 2378 C 2485.091 2375.525, 2329.566 2219.263, 2141.126 2030.752 C 1876.077 1765.602, 1798.733 1687.690, 1799.504 1686.616 C 1800.052 1685.853, 1806.489 1677.986, 1813.810 1669.134 C 1841.352 1635.828, 1875.368 1587.566, 1898.131 1549.500 C 1977.893 1416.115, 2027.213 1265.538, 2040.448 1115 C 2043.616 1078.962, 2044.330 1061.828, 2044.322 1022 C 2044.307 941.274, 2037.142 875.691, 2019.877 798.239 C 1996.538 693.540, 1953.533 586.757, 1896.613 492.173 C 1833.464 387.238, 1748.738 291.955, 1650.477 215.369 C 1519.503 113.285, 1362.156 43.625, 1197 14.608 C 1167.101 9.355, 1132.772 5.128, 1094 1.926 C 1076.976 0.520, 983.168 -0.112, 964.500 1.053 M 979.500 157.074 C 813.069 165.102, 648.548 223.245, 512.071 322.267 C 413.981 393.437, 328.155 489.720, 268.959 595 C 169.646 771.627, 134.772 972.729, 169.072 1171 C 193.609 1312.831, 256.780 1452.356, 347.459 1565 C 384.116 1610.536, 433.040 1659.466, 478.818 1696.373 C 538.333 1744.356, 608.048 1786.443, 677 1816.017 C 795.033 1866.642, 912.478 1889.986, 1037.500 1887.673 C 1078.755 1886.910, 1104.140 1885.013, 1141 1879.940 C 1268.443 1862.401, 1394.480 1814.431, 1503.292 1742.049 C 1552.692 1709.188, 1588.772 1679.405, 1634.078 1634.086 C 1669.480 1598.675, 1689.346 1575.880, 1716.948 1539 C 1793.858 1436.237, 1849.440 1309.048, 1873.397 1181 C 1882.767 1130.915, 1886.828 1089.744, 1887.698 1036 C 1889.125 947.784, 1879.189 871.081, 1855.376 786.500 C 1830.914 699.614, 1788.556 608.900, 1737.240 533.500 C 1671.766 437.297, 1581.470 350.372, 1483.500 289.232 C 1376.517 222.467, 1254.661 178.733, 1132 163.079 C 1083.461 156.885, 1028.379 154.716, 979.500 157.074';

const triluxResetPath =
  'M 61.500 1.482 C 39.074 6.427, 20.227 20.884, 8.676 42 C -3.619 64.478, -2.647 95.087, 11.114 118.779 C 13.681 123.198, 142.439 252.553, 576.966 687.251 L 1139.495 1250.003 577.875 1811.751 C 268.984 2120.713, 14.908 2375.525, 13.262 2378 C 4.904 2390.566, 1.078 2402.223, 0.292 2417.520 C -0.914 2440.980, 6.260 2459.914, 22.614 2476.429 C 33.500 2487.423, 45.495 2494.373, 60.001 2498.090 C 67.965 2500.132, 89.720 2499.876, 97.831 2497.645 C 106.063 2495.380, 113.594 2492.014, 120.743 2487.403 C 124.629 2484.896, 309.095 2301.146, 688.250 1922.098 L 1250 1360.506 1811.750 1922.098 C 2190.905 2301.146, 2375.371 2484.896, 2379.257 2487.403 C 2393.034 2496.289, 2403.827 2499.366, 2421.500 2499.443 C 2435.515 2499.504, 2441.077 2498.504, 2452.177 2493.927 C 2469.183 2486.914, 2486.046 2470.451, 2493.510 2453.574 C 2496.268 2447.337, 2499 2437.400, 2499 2433.606 C 2499 2432.173, 2499.450 2431, 2500 2431 C 2500.601 2431, 2501 2426.944, 2501 2420.833 C 2501 2415.242, 2500.673 2410.993, 2500.274 2411.393 C 2499.874 2411.792, 2499.011 2409.215, 2498.356 2405.666 C 2496.955 2398.072, 2493.514 2389.189, 2488.887 2381.221 C 2486.320 2376.801, 2357.658 2247.544, 1923.036 1812.751 L 1360.508 1250.002 1923.057 687.251 C 2456.142 153.975, 2485.836 124.087, 2489.991 116.618 C 2494.251 108.963, 2499 95.164, 2499 90.446 C 2499 89.165, 2499.450 87.840, 2500 87.500 C 2500.559 87.155, 2501 82.470, 2501 76.882 C 2501 70.470, 2500.641 67.104, 2500 67.500 C 2499.443 67.844, 2499 67.087, 2499 65.789 C 2499 61.319, 2494.852 48.451, 2491.348 42.049 C 2480.912 22.983, 2464.210 9.152, 2444 2.842 C 2437.584 0.839, 2434.404 0.500, 2422 0.500 C 2405.320 0.500, 2398.452 2.109, 2384.500 9.287 C 2376.611 13.346, 2368.718 21.182, 1813.250 576.448 L 1249.999 1139.493 687.250 576.964 C 252.456 142.342, 123.199 13.680, 118.779 11.113 C 111.033 6.615, 102.229 3.156, 94.186 1.452 C 85.921 -0.300, 69.512 -0.285, 61.500 1.482';

const triluxMenuPath =
  'M 219.500 548.496 C 210.843 550.127, 205.915 551.897, 196.691 556.689 C 186.322 562.076, 171.020 577.591, 165.318 588.500 C 149.906 617.987, 154.254 653.516, 176.217 677.547 C 187.029 689.377, 199.875 697.195, 215.237 701.295 L 223.500 703.500 1250 703.500 L 2276.500 703.500 2284.763 701.295 C 2300.125 697.195, 2312.971 689.377, 2323.783 677.547 C 2345.713 653.553, 2350.071 617.942, 2334.682 588.500 C 2331.471 582.357, 2328.178 578.168, 2320.500 570.454 C 2309.477 559.381, 2300.996 554.160, 2286.973 549.815 L 2279.500 547.500 1253 547.339 C 406.962 547.205, 225.269 547.409, 219.500 548.496 M 221.831 1173.021 C 213.510 1174.429, 205.669 1177.095, 197.500 1181.295 C 186.322 1187.042, 171.279 1202.096, 165.318 1213.500 C 149.906 1242.987, 154.254 1278.516, 176.217 1302.547 C 187.029 1314.377, 199.875 1322.195, 215.237 1326.295 L 223.500 1328.500 1250 1328.500 L 2276.500 1328.500 2284.763 1326.295 C 2300.125 1322.195, 2312.971 1314.377, 2323.783 1302.547 C 2345.713 1278.553, 2350.071 1242.942, 2334.682 1213.500 C 2331.471 1207.357, 2328.178 1203.168, 2320.500 1195.454 C 2309.477 1184.381, 2300.996 1179.160, 2286.973 1174.815 L 2279.500 1172.500 1253 1172.366 C 688.425 1172.292, 224.399 1172.587, 221.831 1173.021 M 221.831 1798.021 C 213.510 1799.429, 205.669 1802.095, 197.500 1806.295 C 186.322 1812.042, 171.279 1827.096, 165.318 1838.500 C 149.906 1867.987, 154.254 1903.516, 176.217 1927.547 C 187.029 1939.377, 199.875 1947.195, 215.237 1951.295 L 223.500 1953.500 1250 1953.500 L 2276.500 1953.500 2284.763 1951.295 C 2300.125 1947.195, 2312.971 1939.377, 2323.783 1927.547 C 2345.713 1903.553, 2350.071 1867.942, 2334.682 1838.500 C 2331.471 1832.357, 2328.178 1828.168, 2320.500 1820.454 C 2309.477 1809.381, 2300.996 1804.160, 2286.973 1799.815 L 2279.500 1797.500 1253 1797.366 C 688.425 1797.292, 224.399 1797.587, 221.831 1798.021';

const triluxUserPath =
  'M7.664000000000001 0.480096C6.720015999999999 0.577824 5.914 0.9668640000000001 5.270624 1.6353280000000001C4.99304 1.923728 4.7829440000000005 2.2242240000000004 4.607296000000001 2.584C4.432128 2.942832 4.329232 3.2608960000000002 4.263088 3.648C4.228144 3.85264 4.21408 4.4384 4.2388639999999995 4.657072C4.336704 5.519888 4.7206719999999995 6.318752000000001 5.32896 6.925104C5.907088 7.501392 6.635776 7.86784 7.456 7.994800000000001C7.712928 8.03456 8.287072 8.03456 8.544 7.994800000000001C8.953248 7.931456000000001 9.30096 7.82192 9.672 7.639472C10.808064 7.0808480000000005 11.586144 5.99256 11.751280000000001 4.731184000000001C11.779952 4.512192 11.783888000000001 4.0552 11.759072 3.827376C11.670160000000001 3.011072 11.30472 2.233104 10.729376 1.6353280000000001C10.130464 1.013056 9.379584000000001 0.628048 8.520719999999999 0.502864C8.321727999999998 0.473856 7.846272 0.461216 7.664000000000001 0.480096M7.768 1.481376C7.741600000000001 1.485136 7.6624 1.49584 7.5920000000000005 1.505184C6.811536 1.608672 6.060768 2.103408 5.634656 2.7950079999999997C5.2455680000000005 3.426496 5.1260959999999995 4.217536 5.310768 4.939456C5.505616 5.7010879999999995 6.026496 6.355536 6.72 6.710032C7.1482079999999995 6.928928 7.535824 7.024 8 7.024C9.167888000000001 7.024 10.201904 6.301408 10.607280000000001 5.201952C10.929568 4.32784 10.777744 3.314384 10.213136 2.571008C10.103424 2.426544 9.867168 2.187568 9.719376 2.071568C9.343536 1.7765760000000002 8.921392 1.589968 8.448 1.509552C8.314 1.4868 7.861584 1.468048 7.768 1.481376M7.592032000000001 8.449536C5.992608000000001 8.540832 4.430224 9.252096 3.301568 10.40272C2.1205439999999998 11.60672 1.423232 13.251712 1.417232 14.848C1.4160160000000002 15.173727999999999 1.416288 15.17656 1.458752 15.257008C1.550048 15.43 1.709408 15.526416 1.9040000000000001 15.526416C2.088368 15.526416 2.240352 15.441711999999999 2.337968 15.284559999999999C2.39152 15.198352000000002 2.401168 15.140096 2.4161439999999996 14.812976C2.4432 14.221584000000002 2.517952 13.809344 2.6955999999999998 13.272C2.86432 12.761664000000001 3.0629920000000004 12.356048000000001 3.3617440000000003 11.912C4.399888 10.368976 6.142944000000001 9.44 8 9.44C8.617040000000001 9.44 9.18816 9.534752000000001 9.788688 9.736736C11.452112 10.296224 12.753120000000001 11.604464 13.3044 13.272C13.482048 13.809344 13.556799999999999 14.221584000000002 13.583856 14.812976C13.602112 15.212031999999999 13.615776 15.26016 13.74672 15.387232000000001C13.848512000000001 15.486016 13.949904 15.526416 14.096 15.526416C14.290592 15.526416 14.449952 15.43 14.541248 15.257008C14.583712 15.17656 14.583984000000001 15.173727999999999 14.582768 14.848C14.577664 13.490288000000001 14.0644 12.068976000000001 13.17008 10.936C12.177648 9.678752000000001 10.719567999999999 8.809872 9.144 8.536832C8.833696 8.483072 8.691536000000001 8.466864 8.368 8.448432C8.055968 8.43064 7.919536 8.430832 7.592032000000001 8.449536';

function TriluxIcon({ path, viewBox = '0 0 2500 2500' }: { path: string; viewBox?: string }) {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox={viewBox} version="1.1">
      <path d={path} stroke="none" fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

function MenuIcon() {
  return <TriluxIcon path={triluxMenuPath} />;
}

function SearchIcon() {
  return <TriluxIcon path={triluxSearchPath} />;
}

function ResetIcon() {
  return <TriluxIcon path={triluxResetPath} />;
}

function UserIcon() {
  return <TriluxIcon path={triluxUserPath} viewBox="0 0 16 16" />;
}

function SupportIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
      <path
        d="M4.5 13.5h-1A1.5 1.5 0 0 1 2 12v-1.4A8.6 8.6 0 0 1 10.6 2h2.8A8.6 8.6 0 0 1 22 10.6V12a1.5 1.5 0 0 1-1.5 1.5h-1v-3h1A7.1 7.1 0 0 0 13.4 3.5h-2.8A7.1 7.1 0 0 0 3.5 10.5h1v3Zm2.4-4.2h1.2c.55 0 1 .45 1 1v4.4c0 .55-.45 1-1 1H6.9a2.4 2.4 0 0 1-2.4-2.4v-1.6a2.4 2.4 0 0 1 2.4-2.4Zm9 0h1.2a2.4 2.4 0 0 1 2.4 2.4v1.6a2.4 2.4 0 0 1-2.4 2.4h-.7A4.4 4.4 0 0 1 12 20h-1.4a1 1 0 1 1 0-2H12a2.4 2.4 0 0 0 2.4-2.4v-5.3c0-.55.45-1 1-1h.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const t = useTranslation();
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [navigationState, setNavigationState] = useState<NavigationState>(() => ({
    pathname,
    activeMenu: null,
    mobileOpen: false,
    mobilePanel: null,
    searchOpen: false,
  }));
  const [isAtTop, setIsAtTop] = useState(() => (typeof window === 'undefined' ? true : window.scrollY < 10));
  const [isSmall, setIsSmall] = useState(() => (typeof window === 'undefined' ? false : window.scrollY > 72));
  const [searchValue, setSearchValue] = useState('');

  const navItems = useMemo<NavItem[]>(
    () => [
      {
        id: 'families',
        label: t.nav.families,
        href: '/families',
        columns: [
          {
            title: 'Product families',
            links: [
              { label: 'Indoor lighting', href: '/families?category=indoor' },
              { label: 'Outdoor lighting', href: '/families?category=outdoor' },
              { label: 'Linear systems', href: '/families?category=linear' },
              { label: 'Accessories', href: '/families?category=accessories' },
            ],
          },
          {
            title: 'Featured',
            links: [
              { label: 'New products', href: '/families?filter=new' },
              { label: 'Architectural series', href: '/families?filter=architectural' },
              { label: 'Technical luminaires', href: '/families?filter=technical' },
            ],
          },
        ],
      },
      {
        id: 'projects',
        label: t.nav.projects,
        href: '/projects',
        columns: [
          {
            title: 'Applications',
            links: [
              { label: 'Commercial', href: '/projects?type=commercial' },
              { label: 'Residential', href: '/projects?type=residential' },
              { label: 'Hospitality', href: '/projects?type=hospitality' },
              { label: 'Public spaces', href: '/projects?type=public' },
            ],
          },
          {
            title: 'Explore',
            links: [
              { label: 'Case studies', href: '/projects' },
              { label: 'Lighting concepts', href: '/projects?view=concepts' },
              { label: 'Reference gallery', href: '/projects?view=gallery' },
            ],
          },
        ],
      },
      {
        id: 'downloads',
        label: t.nav.downloads,
        href: '/downloads',
        columns: [
          {
            title: 'Resources',
            links: [
              { label: 'Catalogues', href: '/downloads?type=catalogues' },
              { label: 'Datasheets', href: '/downloads?type=datasheets' },
              { label: 'IES files', href: '/downloads?type=ies' },
              { label: 'Installation guides', href: '/downloads?type=guides' },
            ],
          },
        ],
      },
      {
        id: 'contact',
        label: t.nav.contact,
        href: '/contact',
        columns: [
          {
            title: 'Contact',
            links: [
              { label: t.nav.requestSpecs, href: '/contact' },
              { label: 'Customer support', href: '/contact?topic=support' },
              { label: 'Showroom visit', href: '/contact?topic=showroom' },
            ],
          },
        ],
      },
    ],
    [t]
  );

  const routeChanged = navigationState.pathname !== pathname;
  const activeMenu = routeChanged ? null : navigationState.activeMenu;
  const mobileOpen = routeChanged ? false : navigationState.mobileOpen;
  const mobilePanel = routeChanged ? null : navigationState.mobilePanel;
  const searchOpen = routeChanged ? false : navigationState.searchOpen;
  const selectedMobilePanel = navItems.find((item) => item.id === mobilePanel) ?? null;
  const searchHasResults = searchValue.trim().length >= 3;
  const overlayOpen = Boolean(activeMenu || mobileOpen || searchOpen);
  const transparent = isHome && isAtTop && !overlayOpen;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsAtTop(y < 10);
      setIsSmall(y > 72);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = overlayOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [overlayOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setNavigationState({
          pathname,
          activeMenu: null,
          mobileOpen: false,
          mobilePanel: null,
          searchOpen: false,
        });
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [pathname]);

  const closeAll = () => {
    setNavigationState({
      pathname,
      activeMenu: null,
      mobileOpen: false,
      mobilePanel: null,
      searchOpen: false,
    });
  };

  const openSearchPanel = () => {
    setNavigationState({
      pathname,
      activeMenu: null,
      mobileOpen: false,
      mobilePanel: null,
      searchOpen: true,
    });
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);

    setNavigationState({
      pathname,
      activeMenu: null,
      mobileOpen: false,
      mobilePanel: null,
      searchOpen: value.trim().length >= 3 || searchOpen,
    });
  };

  const resetSearch = () => {
    setSearchValue('');
    setNavigationState({
      pathname,
      activeMenu: null,
      mobileOpen: false,
      mobilePanel: null,
      searchOpen: false,
    });
  };

  return (
    <>
      <header
        className={[
          'header',
          'lumak-header',
          transparent ? 'header--transparent lumak-header--transparent navbar-transparent' : 'lumak-header--solid',
          isSmall ? 'header--small lumak-header--small' : '',
          overlayOpen ? 'header--open lumak-header--open' : '',
          searchOpen ? 'header--search-open' : '',
        ].join(' ')}
      >
        <div className="header__start">
          <div className="header__logo">
            <Link href="/" className="header__logo-link" aria-label="LUMAK home" onClick={closeAll}>
              <div className={`logo ${isSmall ? 'logo--small' : ''}`}>
                <span className="logo__wordmark">LUMAK</span>
              </div>
            </Link>
          </div>

          <nav aria-label="Primary navigation">
            <ul className="navigation">
              {navItems.map((item) => {
                const active = activeMenu === item.id;

                return (
                  <li className="navigation__item" key={item.id}>
                    <button
                      type="button"
                      className={`navigation__button ${active ? 'navigation__button--active' : ''}`}
                      aria-expanded={active}
                      aria-controls={`lumak-panel-${item.id}`}
                      onClick={() =>
                        setNavigationState({
                          pathname,
                          activeMenu: active ? null : item.id,
                          mobileOpen: false,
                          mobilePanel: null,
                          searchOpen: false,
                        })
                      }
                    >
                      <span className="item__label">{item.label}</span>
                    </button>

                    <div className={`navigation-panel ${active ? 'navigation-panel--show' : ''}`} id={`lumak-panel-${item.id}`}>
                      <div className="navigation-panel__content">
                        <div className="navigation-panel__intro">
                          <p>{item.label}</p>
                          <Link href={item.href} className="btn btn--text btn--full-width btn--align-left btn--bold navigation-panel__button" onClick={closeAll}>
                            <span className="btn__label">View all</span>
                            <ChevronIcon />
                          </Link>
                        </div>

                        {item.columns.map((column) => (
                          <div className="navigation-panel__group" key={column.title}>
                            <div className="navigation-panel__group-title">
                              <p className="btn btn--text btn--full-width btn--align-left btn--bold navigation-panel__button">
                                <span className="btn__label">{column.title}</span>
                              </p>
                            </div>
                            <ul className="navigation-panel__list">
                              {column.links.map((link) => (
                                <li className="navigation-panel__item" key={link.href}>
                                  <Link href={link.href} className="btn btn--text btn--full-width btn--align-left navigation-panel__button" onClick={closeAll}>
                                    <span className="btn__label btn__label--collapse">{link.label}</span>
                                    <ChevronIcon />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="header__shell">
          <div className="header__end">
            <div className="header__tools flex-fill">
              <span className="search search--header d-none d-xl-inline-block">
                <input
                  className="search__input"
                  type="search"
                  placeholder="Search"
                  data-testid="search-input"
                  value={searchValue}
                  onChange={(event) => handleSearchChange(event.target.value)}
                  onFocus={openSearchPanel}
                  onClick={openSearchPanel}
                  aria-label="Search"
                />
                <span className="input__button">
                  <button className="btn btn--text btn--icon btn--header" type="button" data-testid="search-icon-button" onClick={openSearchPanel}>
                    <span className="icon">
                      <SearchIcon />
                    </span>
                  </button>
                  <button className="btn btn--text btn--icon btn--reset btn--header" type="button" data-testid="reset-icon-button" onClick={resetSearch}>
                    <span className="icon">
                      <ResetIcon />
                    </span>
                  </button>
                </span>
              </span>

              <div className="tool-icons">
                <button
                  type="button"
                  data-testid="button"
                  aria-disabled="false"
                  className={`btn btn--icon btn--text d-inline-block d-xl-none btn--header tool-icon--search ${
                    searchOpen ? 'tool-icon--active' : ''
                  }`}
                  aria-label="Open search"
                  aria-expanded={searchOpen}
                  onClick={() => (searchOpen ? closeAll() : openSearchPanel())}
                  draggable="false"
                >
                  <span className="icon">
                    <SearchIcon />
                  </span>
                </button>

                <Link href="/contact" className="btn btn--icon btn--text d-none d-md-inline-block btn--header" aria-label={t.nav.contact}>
                  <span className="icon">
                    <SupportIcon />
                  </span>
                </Link>

                <button type="button" data-testid="button" aria-disabled="false" className="btn btn--icon btn--text btn--header" aria-label="Login" draggable="false">
                  <span className="icon">
                    <UserIcon />
                  </span>
                </button>

                <button
                  type="button"
                  data-testid="button"
                  aria-disabled="false"
                  className="btn btn--icon btn--text d-inline-block d-xl-none btn--header tool-icon--open-nav"
                  aria-label="Open menu"
                  aria-expanded={mobileOpen}
                  onClick={() =>
                    setNavigationState({
                      pathname,
                      activeMenu: null,
                      mobileOpen: true,
                      mobilePanel: null,
                      searchOpen: false,
                    })
                  }
                  draggable="false"
                >
                  <span className="icon">
                    <MenuIcon />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div data-testid="searchHeaderPanel" className={`header__panel ${searchOpen ? 'header__panel--show' : ''}`} id="headerSearchPanel">
          <div className="search-panel">
            <div className="search-panel__header">
              <div className="start">
                <p className="search-panel__text d-none d-xl-block">
                  <span className="text--bold">{searchValue}</span>
                </p>
                <div className="search-panel__input">
                  <span className="search d-inline-block d-xl-none">
                    <input
                      className="search__input"
                      type="search"
                      placeholder="Search"
                      data-testid="searchPanelInput"
                      value={searchValue}
                      onChange={(event) => handleSearchChange(event.target.value)}
                      autoFocus={searchOpen}
                      aria-label="Search"
                    />
                    <span className="input__button">
                      <button type="button" data-testid="button" aria-disabled="false" className="btn btn--icon btn--text" draggable="false">
                        <span className="icon">
                          <SearchIcon />
                        </span>
                      </button>
                      <button type="button" data-testid="searchPanelReset" aria-disabled="false" className="btn btn--icon btn--text btn--reset" onClick={resetSearch} draggable="false">
                        <span className="icon">
                          <ResetIcon />
                        </span>
                      </button>
                    </span>
                  </span>
                </div>
              </div>
              <div className="end" />
            </div>

            <div className={`search-panel__body ${searchHasResults ? 'search-panel__body--show' : ''}`} data-testid="searchPanelResult">
              {searchHasResults && (
                <div className="search-panel__results">
                  <p>Search results for <span>{searchValue}</span></p>
                  <Link href={`/search?q=${encodeURIComponent(searchValue)}`} onClick={closeAll}>
                    View all results
                    <ChevronIcon />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <button
        type="button"
        className={`backdrop lumak-backdrop ${overlayOpen ? 'backdrop--opened lumak-backdrop--open' : 'backdrop--closed'}`}
        aria-label="Close navigation"
        onClick={closeAll}
      />

      <aside className={`navigation-panel-mobile lumak-mobile ${mobileOpen ? 'navigation-panel-mobile--show lumak-mobile--open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="navigation-panel-mobile__header lumak-mobile__header">
          <Link href="/" className="header__logo-link" onClick={closeAll}>
            <div className="logo logo--small">
              <span className="logo__wordmark">LUMAK</span>
            </div>
          </Link>

          <button type="button" className="navigation-panel-mobile__icon--close btn btn--icon btn--text" aria-label="Close menu" onClick={closeAll}>
            <span className="icon">
              <ResetIcon />
            </span>
          </button>
        </div>

        <div className="navigation-panel-mobile__scrollable">
          <div className="navigation-panel-mobile__container">
            <nav className="lumak-mobile__nav" aria-label="Mobile navigation">
              <ul className="navigation-panel__list">
                {navItems.map((item) => {
                  const active = mobilePanel === item.id;

                  return (
                    <li className="navigation-panel__item lumak-mobile__item" key={item.id}>
                      <button
                        type="button"
                        className="btn btn--text btn--full-width btn--wide btn--icon-after btn--bold btn--text-lg navigation-panel-mobile__button navigation-panel-mobile__button--first-level"
                        aria-expanded={active}
                        onClick={() =>
                          setNavigationState({
                            pathname,
                            activeMenu: null,
                            mobileOpen: true,
                            mobilePanel: active ? null : item.id,
                            searchOpen: false,
                          })
                        }
                      >
                        <span className="icon">
                          <ChevronIcon />
                        </span>
                        <span className="btn__label btn__label--collapse">{item.label}</span>
                      </button>

                      {active && (
                        <div className="navigation-panel-mobile__layer navigation-panel-mobile__layer--second navigation-panel-mobile__layer--show">
                          <div className="navigation-panel-mobile__body lumak-mobile__subnav">
                            <Link href={item.href} className="navigation-panel-mobile__overview" onClick={closeAll}>
                              View all {item.label}
                            </Link>

                            {selectedMobilePanel?.columns.map((column) => (
                              <div className="lumak-mobile__group" key={column.title}>
                                <p>{column.title}</p>
                                {column.links.map((link) => (
                                  <Link href={link.href} key={link.href} onClick={closeAll}>
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        <div className="navigation-panel-mobile__contact">
          <Link href="/contact" className="btn btn--tonal btn--icon btn--icon-lg" onClick={closeAll} aria-label={t.nav.contact}>
            <span className="icon icon--lg">
              <SupportIcon />
            </span>
          </Link>
          <div className="contact-card">
            <p className="contact-card__title">Do you need help?</p>
            <p className="contact-card__company-name">{t.nav.requestSpecs}</p>
          </div>
        </div>
      </aside>
    </>
  );
}