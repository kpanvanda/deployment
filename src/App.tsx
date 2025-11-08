'use client';

import { useState } from 'react';
import { Menu, Grid3x3, HelpCircle, Bell, RefreshCw, Maximize2, Settings, ChevronDown, TrendingUp, TrendingDown, Circle, BarChart3, Flame, Zap, MoreVertical, ArrowUpDown, Star, Eye, Copy, ExternalLink, X, Filter, SortAsc, SortDesc } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './components/ui/dropdown-menu';
import { Button } from './components/ui/button';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';

type SortOption = 'mc-high' | 'mc-low' | 'volume-high' | 'volume-low' | 'time-recent' | 'time-oldest';

interface TokenItem {
  icon: string;
  name: string;
  subtitle: string;
  time: string;
  stats1?: string;
  stats2?: string;
  stats3?: string;
  mc: string;
  mcValue: number;
  volume: string;
  volumeValue: number;
  metrics: Array<{
    value: string;
    positive?: boolean;
    negative?: boolean;
    warning?: boolean;
    neutral?: boolean;
  }>;
  hasWarnings?: boolean;
  description?: string;
  contract?: string;
}

export default function App() {
  const [selectedToken, setSelectedToken] = useState<TokenItem | null>(null);
  const [sortOptions, setSortOptions] = useState<{ [key: string]: SortOption }>({
    'New Pairs': 'mc-high',
    'Final Stretch': 'mc-high',
    'Migrated': 'mc-high'
  });

  const initialColumns = [
    {
      title: "New Pairs",
      count: 5,
      colors: ['#3B82F6', '#10B981', '#FBBF24'],
      items: [
        {
          icon: "🐸",
          name: "gary",
          subtitle: "thank you g...",
          time: "7d",
          stats1: "0/2",
          stats2: "0/3023",
          mc: "MC $4.85K",
          mcValue: 4850,
          volume: "v $5",
          volumeValue: 5,
          description: "Gary is a community-driven meme token celebrating gratitude and positivity in the crypto space.",
          contract: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
          metrics: [
            { value: "3%", positive: true },
            { value: "3%", positive: true },
            { value: "5%", positive: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true }
          ]
        },
        {
          icon: "🐶",
          name: "chix",
          subtitle: "chix coin",
          time: "5m",
          stats1: "0",
          stats2: "0/0",
          mc: "MC $4.84K",
          mcValue: 4840,
          volume: "v $340",
          volumeValue: 340,
          description: "Chix coin brings the energy of fast-moving markets to your portfolio.",
          contract: "0x8a8f8d3f9c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5",
          metrics: [
            { value: "0%", neutral: true },
            { value: "2%", positive: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true }
          ]
        },
        {
          icon: "🤖",
          name: "Optimus Prime",
          subtitle: "Optimus Pri...",
          time: "7d",
          stats1: "0",
          stats2: "0/5",
          stats3: "2d",
          mc: "MC $4.4K",
          mcValue: 4400,
          volume: "v $6",
          volumeValue: 6,
          description: "Transform your portfolio with Optimus Prime - the leader of decentralized robotics.",
          contract: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0",
          metrics: [
            { value: "0%", neutral: true },
            { value: "0%", neutral: true },
            { value: "fly", warning: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true }
          ]
        },
        {
          icon: "🌈",
          name: "PPills",
          subtitle: "Pills of Pump",
          time: "7d",
          stats1: "1",
          stats2: "0",
          mc: "MC $4.4K",
          mcValue: 4400,
          volume: "v $2",
          volumeValue: 2,
          description: "PPills offers a dose of daily gains to holders with innovative tokenomics.",
          contract: "0x9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0",
          metrics: [
            { value: "0%", neutral: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true }
          ]
        },
        {
          icon: "💰",
          name: "urpoor",
          subtitle: "urpoor",
          time: "d",
          stats1: "0/3034",
          stats2: "d",
          mc: "MC $4.12K",
          mcValue: 4120,
          volume: "v $5",
          volumeValue: 5,
          description: "A satirical take on wealth disparity in crypto markets.",
          contract: "0x5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6",
          metrics: [
            { value: "0%", neutral: true },
            { value: "0%", neutral: true },
            { value: "25d", warning: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true }
          ]
        }
      ]
    },
    {
      title: "Final Stretch",
      count: 5,
      colors: ['#3B82F6', '#10B981', '#FBBF24'],
      items: [
        {
          icon: "🔴",
          name: "HUB",
          subtitle: "Hub Off...",
          time: "3h",
          stats1: "0",
          stats2: "0",
          mc: "MC $266K",
          mcValue: 266000,
          volume: "v $11K",
          volumeValue: 11000,
          description: "Controversial token with high volatility and community engagement.",
          contract: "0xa1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
          metrics: [
            { value: "100%", negative: true },
            { value: "19%", positive: true },
            { value: "3h", warning: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true }
          ],
          hasWarnings: true
        },
        {
          icon: "📺",
          name: "4K",
          subtitle: "Tap, Hold, L...",
          time: "8/2",
          stats1: "0",
          stats2: "0",
          mc: "MC $26.7K",
          mcValue: 26700,
          volume: "v $13K",
          volumeValue: 13000,
          description: "Ultra HD resolution for your crypto gains - sharp and clear.",
          contract: "0xb2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1",
          metrics: [
            { value: "50%", negative: true },
            { value: "0%", neutral: true },
            { value: "1mo", warning: true },
            { value: "50%", neutral: true },
            { value: "0%", neutral: true }
          ],
          hasWarnings: true
        },
        {
          icon: "🌐",
          name: "SCHAN",
          subtitle: "Solana-Chan",
          time: "1/2",
          stats1: "0",
          stats2: "0",
          mc: "MC $26.7K",
          mcValue: 26700,
          volume: "v $13K",
          volumeValue: 13000,
          description: "Anime-inspired Solana ecosystem token with dedicated community.",
          contract: "0xc3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2",
          metrics: [
            { value: "0%", neutral: true },
            { value: "0%", neutral: true },
            { value: "1mo", warning: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true }
          ],
          hasWarnings: true
        },
        {
          icon: "🎸",
          name: "cliiar",
          subtitle: "air clitar",
          time: "0",
          stats1: "0",
          stats2: "3",
          mc: "MC $26.7K",
          mcValue: 26700,
          volume: "v $13K",
          volumeValue: 13000,
          description: "Rock your portfolio with air guitar vibes and steady growth.",
          contract: "0xd4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3",
          metrics: [
            { value: "0%", neutral: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true }
          ]
        },
        {
          icon: "✨",
          name: "Aura Inu",
          subtitle: "Aura Inu",
          time: "7d",
          stats1: "0",
          stats2: "0",
          mc: "MC $3.14K",
          mcValue: 3140,
          volume: "v $34K",
          volumeValue: 34000,
          description: "Spiritual energy meets dog meme culture in this unique token.",
          contract: "0xe5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4",
          metrics: [
            { value: "71%", negative: true },
            { value: "18%", positive: true },
            { value: "20h", warning: true },
            { value: "50%", neutral: true },
            { value: "78%", negative: true }
          ],
          hasWarnings: true
        }
      ]
    },
    {
      title: "Migrated",
      count: 5,
      colors: ['#3B82F6', '#10B981', '#FBBF24'],
      items: [
        {
          icon: "🪵",
          name: "PWOOD",
          subtitle: "PepeWood",
          time: "4m",
          stats1: "461",
          stats2: "29",
          mc: "MC $675K",
          mcValue: 675000,
          volume: "v $243K",
          volumeValue: 243000,
          description: "Wood you believe it? The strongest meme token in the forest.",
          contract: "0xf6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5",
          metrics: [
            { value: "0%", neutral: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true },
            { value: "0%", neutral: true }
          ]
        },
        {
          icon: "🎲",
          name: "BET",
          subtitle: "Betmeet",
          time: "90d",
          stats1: "20",
          stats2: "0",
          mc: "MC $153K",
          mcValue: 153000,
          volume: "v $7K",
          volumeValue: 7000,
          description: "Decentralized betting platform token with proven track record.",
          contract: "0xg7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6",
          metrics: [
            { value: "93%", positive: true },
            { value: "09s", warning: true },
            { value: "9m", warning: true },
            { value: "13%", neutral: true },
            { value: "0%", neutral: true }
          ]
        },
        {
          icon: "👤",
          name: "ANON",
          subtitle: "anon",
          time: "1/8",
          stats1: "0",
          stats2: "0",
          mc: "MC $121K",
          mcValue: 121000,
          volume: "v $6K",
          volumeValue: 6000,
          description: "Privacy-focused token for anonymous transactions and governance.",
          contract: "0xh8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7",
          metrics: [
            { value: "96%", positive: true },
            { value: "0%", neutral: true },
            { value: "3h", warning: true },
            { value: "14%", neutral: true },
            { value: "0%", neutral: true }
          ]
        },
        {
          icon: "🏛️",
          name: "RWA",
          subtitle: "Real World ...",
          time: "5d",
          stats1: "20",
          stats2: "0",
          mc: "MC $35.9K",
          mcValue: 35900,
          volume: "v $17K",
          volumeValue: 17000,
          description: "Real World Assets tokenization platform connecting DeFi with traditional assets.",
          contract: "0xi9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8",
          metrics: [
            { value: "1%", neutral: true },
            { value: "1%", positive: true },
            { value: "4h", warning: true },
            { value: "83%", negative: true },
            { value: "0%", neutral: true }
          ]
        },
        {
          icon: "💎",
          name: "MHM",
          subtitle: "Mayhem Me...",
          time: "5d",
          stats1: "0",
          stats2: "0",
          mc: "MC $14.6K",
          mcValue: 14600,
          volume: "v $0.00",
          volumeValue: 0,
          description: "Chaos and opportunity combined in a high-risk high-reward token.",
          contract: "0xj0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9",
          metrics: [
            { value: "2%", neutral: true },
            { value: "05s", warning: true },
            { value: "4d", warning: true },
            { value: "100%", negative: true },
            { value: "65%", negative: true }
          ]
        }
      ]
    }
  ];

  const [columns, setColumns] = useState(initialColumns);

  const sortColumn = (columnTitle: string, sortBy: SortOption) => {
    setSortOptions({ ...sortOptions, [columnTitle]: sortBy });
    
    setColumns(prevColumns => 
      prevColumns.map(col => {
        if (col.title !== columnTitle) return col;
        
        const sortedItems = [...col.items].sort((a, b) => {
          switch (sortBy) {
            case 'mc-high':
              return b.mcValue - a.mcValue;
            case 'mc-low':
              return a.mcValue - b.mcValue;
            case 'volume-high':
              return b.volumeValue - a.volumeValue;
            case 'volume-low':
              return a.volumeValue - b.volumeValue;
            case 'time-recent':
            case 'time-oldest':
              return 0; // Simplified for now
            default:
              return 0;
          }
        });
        
        return { ...col, items: sortedItems };
      })
    );

    toast.success(`Sorted by ${sortBy}`);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Toaster theme="dark" />
        
        {/* Header */}
        <header className="border-b border-gray-800 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-500 fill-blue-500" />
                <span className="text-[15px] tracking-wide">Pulse</span>
              </div>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Menu className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                </TooltipTrigger>
                <TooltipContent>Menu</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Grid3x3 className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                </TooltipTrigger>
                <TooltipContent>Grid View</TooltipContent>
              </Tooltip>
            </div>
            
            <div className="flex items-center gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                </TooltipTrigger>
                <TooltipContent>Help & Support</TooltipContent>
              </Tooltip>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-900 rounded cursor-pointer hover:bg-gray-800 transition-colors">
                    <span className="text-[13px]">Display</span>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
                  <DropdownMenuItem onClick={() => toast.success('Compact view enabled')}>
                    Compact View
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.success('Comfortable view enabled')}>
                    Comfortable View
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.success('Detailed view enabled')}>
                    Detailed View
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Grid3x3 className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                </TooltipTrigger>
                <TooltipContent>Layout Options</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <BarChart3 className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                </TooltipTrigger>
                <TooltipContent>Analytics</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" onClick={() => toast.info('No new notifications')} />
                </TooltipTrigger>
                <TooltipContent>Notifications</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <RefreshCw className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white hover:rotate-180 transition-all duration-300" onClick={() => toast.success('Refreshed!')} />
                </TooltipTrigger>
                <TooltipContent>Refresh Data</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Maximize2 className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                </TooltipTrigger>
                <TooltipContent>Fullscreen</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" onClick={() => toast.info('Settings panel coming soon')} />
                </TooltipTrigger>
                <TooltipContent>Settings</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-4 p-4">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-3">
              {/* Column Header */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#0f0f0f] rounded-lg border border-gray-800">
                <div className="flex items-center gap-2">
                  <h2 className="text-[15px]">{column.title}</h2>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <RefreshCw className="w-3.5 h-3.5 text-gray-500 cursor-pointer hover:text-white hover:rotate-180 transition-all duration-300" onClick={() => toast.success(`${column.title} refreshed`)} />
                    </TooltipTrigger>
                    <TooltipContent>Refresh column</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-gray-800 rounded text-[11px] cursor-pointer hover:bg-gray-700 transition-colors">
                        {column.count}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{column.count} tokens in this column</TooltipContent>
                  </Tooltip>
                </div>
                
                <div className="flex items-center gap-1.5">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex gap-0.5 cursor-pointer">
                        {column.colors.map((color, i) => (
                          <Circle key={i} className="w-2 h-2" style={{ fill: color, color: color }} />
                        ))}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>Risk indicators</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <TrendingUp className="w-4 h-4 text-gray-500 cursor-pointer hover:text-green-500 transition-colors" onClick={() => toast.success('Tracking enabled')} />
                    </TooltipTrigger>
                    <TooltipContent>Track column</TooltipContent>
                  </Tooltip>

                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="text-gray-500 hover:text-white transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 bg-gray-900 border-gray-800 p-2" align="end">
                      <div className="space-y-1">
                        <div className="px-2 py-1.5 text-[11px] text-gray-400 uppercase tracking-wider">Sort By</div>
                        <button 
                          onClick={() => sortColumn(column.title, 'mc-high')}
                          className="w-full flex items-center gap-2 px-2 py-1.5 text-[13px] hover:bg-gray-800 rounded transition-colors text-left"
                        >
                          <SortDesc className="w-3.5 h-3.5" />
                          Market Cap (High to Low)
                        </button>
                        <button 
                          onClick={() => sortColumn(column.title, 'mc-low')}
                          className="w-full flex items-center gap-2 px-2 py-1.5 text-[13px] hover:bg-gray-800 rounded transition-colors text-left"
                        >
                          <SortAsc className="w-3.5 h-3.5" />
                          Market Cap (Low to High)
                        </button>
                        <button 
                          onClick={() => sortColumn(column.title, 'volume-high')}
                          className="w-full flex items-center gap-2 px-2 py-1.5 text-[13px] hover:bg-gray-800 rounded transition-colors text-left"
                        >
                          <SortDesc className="w-3.5 h-3.5" />
                          Volume (High to Low)
                        </button>
                        <button 
                          onClick={() => sortColumn(column.title, 'volume-low')}
                          className="w-full flex items-center gap-2 px-2 py-1.5 text-[13px] hover:bg-gray-800 rounded transition-colors text-left"
                        >
                          <SortAsc className="w-3.5 h-3.5" />
                          Volume (Low to High)
                        </button>
                        <div className="border-t border-gray-800 my-1"></div>
                        <button 
                          onClick={() => toast.info('Filter options coming soon')}
                          className="w-full flex items-center gap-2 px-2 py-1.5 text-[13px] hover:bg-gray-800 rounded transition-colors text-left"
                        >
                          <Filter className="w-3.5 h-3.5" />
                          Filter
                        </button>
                        <button 
                          onClick={() => toast.info('Export initiated')}
                          className="w-full flex items-center gap-2 px-2 py-1.5 text-[13px] hover:bg-gray-800 rounded transition-colors text-left"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Export
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Cards */}
              {column.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="bg-[#141414] border border-gray-800 rounded-lg p-3 hover:border-gray-600 hover:shadow-lg hover:shadow-blue-900/10 transition-all cursor-pointer group"
                  onClick={() => setSelectedToken(item)}
                >
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-[18px] group-hover:scale-110 transition-transform">
                            {item.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>Click card for details</TooltipContent>
                      </Tooltip>
                      <div>
                        <div className="text-[13px] group-hover:text-blue-400 transition-colors">{item.name}</div>
                        <div className="text-[11px] text-gray-500">{item.subtitle}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="text-[13px] cursor-help">{item.mc}</div>
                        </TooltipTrigger>
                        <TooltipContent>Market Capitalization</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="text-[11px] text-gray-500 cursor-help">{item.volume}</div>
                        </TooltipTrigger>
                        <TooltipContent>24h Trading Volume</TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center gap-2 mb-2 text-[11px] text-gray-400">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-help">{item.time}</span>
                      </TooltipTrigger>
                      <TooltipContent>Time since launch</TooltipContent>
                    </Tooltip>
                    {item.stats1 && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className={`cursor-help ${item.stats1.includes('-') ? 'text-red-500' : item.stats1.includes('+') ? 'text-green-500' : ''}`}>
                            {item.stats1}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>Holder count / Transactions</TooltipContent>
                      </Tooltip>
                    )}
                    {item.stats2 && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-help">{item.stats2}</span>
                        </TooltipTrigger>
                        <TooltipContent>Additional metrics</TooltipContent>
                      </Tooltip>
                    )}
                    {item.stats3 && <span>{item.stats3}</span>}
                  </div>

                  {/* Metrics Row */}
                  <div className="flex items-center gap-3 text-[11px]">
                    {item.metrics.map((metric, metricIndex) => (
                      <Tooltip key={metricIndex}>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-1 cursor-help">
                            {metric.positive && <TrendingUp className="w-3 h-3 text-green-500" />}
                            {metric.negative && <TrendingDown className="w-3 h-3 text-red-500" />}
                            {metric.warning && <Flame className="w-3 h-3 text-orange-500" />}
                            {metric.neutral && <div className="w-3 h-3 flex items-center justify-center"><div className="w-2 h-2 bg-gray-700 rounded-sm"></div></div>}
                            <span className={
                              metric.positive ? 'text-green-500' :
                              metric.negative ? 'text-red-500' :
                              metric.warning ? 'text-orange-500' :
                              'text-gray-500'
                            }>
                              {metric.value}
                            </span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          {metric.positive && 'Positive trend'}
                          {metric.negative && 'Negative trend'}
                          {metric.warning && 'Warning indicator'}
                          {metric.neutral && 'Neutral / No change'}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                    {item.hasWarnings && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="ml-auto flex gap-1 cursor-help">
                            <Circle className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            <Circle className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>High risk indicators detected</TooltipContent>
                      </Tooltip>
                    )}
                  </div>

                  {/* Hidden Quick Actions - Shown on Hover */}
                  <div className="mt-2 pt-2 border-t border-gray-800 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-6 px-2 text-[11px] hover:bg-gray-800"
                          onClick={(e) => {
                            e.stopPropagation();
                            toast.success(`${item.name} added to favorites`);
                          }}
                        >
                          <Star className="w-3 h-3 mr-1" />
                          Watch
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Add to watchlist</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-6 px-2 text-[11px] hover:bg-gray-800"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(`https://solscan.io/token/${item.contract}`, '_blank');
                          }}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>View on explorer</TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Token Detail Modal */}
        <Dialog open={!!selectedToken} onOpenChange={(open) => !open && setSelectedToken(null)}>
          <DialogContent className="bg-[#141414] border-gray-800 max-w-2xl">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[24px]">
                  {selectedToken?.icon}
                </div>
                <div>
                  <DialogTitle className="text-[20px]">{selectedToken?.name}</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    {selectedToken?.subtitle}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            {selectedToken && (
              <div className="space-y-4 mt-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0a0a0a] p-4 rounded-lg border border-gray-800">
                    <div className="text-[11px] text-gray-500 mb-1">Market Cap</div>
                    <div className="text-[18px]">{selectedToken.mc.replace('MC ', '')}</div>
                  </div>
                  <div className="bg-[#0a0a0a] p-4 rounded-lg border border-gray-800">
                    <div className="text-[11px] text-gray-500 mb-1">24h Volume</div>
                    <div className="text-[18px]">{selectedToken.volume.replace('v ', '')}</div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-[#0a0a0a] p-4 rounded-lg border border-gray-800">
                  <div className="text-[13px] text-gray-400 mb-2">About</div>
                  <p className="text-[14px]">{selectedToken.description}</p>
                </div>

                {/* Contract Address */}
                <div className="bg-[#0a0a0a] p-4 rounded-lg border border-gray-800">
                  <div className="text-[13px] text-gray-400 mb-2">Contract Address</div>
                  <div className="flex items-center gap-2">
                    <code className="text-[12px] font-mono text-blue-400 flex-1 truncate">
                      {selectedToken.contract}
                    </code>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 px-2"
                          onClick={() => copyToClipboard(selectedToken.contract || '', 'Contract address')}
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Copy address</TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                {/* Metrics */}
                <div className="bg-[#0a0a0a] p-4 rounded-lg border border-gray-800">
                  <div className="text-[13px] text-gray-400 mb-3">Performance Metrics</div>
                  <div className="flex items-center gap-4">
                    {selectedToken.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        {metric.positive && <TrendingUp className="w-4 h-4 text-green-500" />}
                        {metric.negative && <TrendingDown className="w-4 h-4 text-red-500" />}
                        {metric.warning && <Flame className="w-4 h-4 text-orange-500" />}
                        {metric.neutral && <div className="w-4 h-4 flex items-center justify-center"><div className="w-3 h-3 bg-gray-700 rounded-sm"></div></div>}
                        <span className={`text-[14px] ${
                          metric.positive ? 'text-green-500' :
                          metric.negative ? 'text-red-500' :
                          metric.warning ? 'text-orange-500' :
                          'text-gray-500'
                        }`}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      toast.success(`${selectedToken.name} added to watchlist`);
                      setSelectedToken(null);
                    }}
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Add to Watchlist
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-gray-700 hover:bg-gray-800"
                    onClick={() => window.open(`https://solscan.io/token/${selectedToken.contract}`, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Explorer
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
}
