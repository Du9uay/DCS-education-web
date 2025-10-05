import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu,
  Monitor,
  Wifi,
  Database,
  Server,
  Globe,
  TrendingUp,
  Layers,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const DCSBasicsPage: React.FC = () => {
  const fourCTechnology = [
    {
      name: "Computer（计算机）",
      icon: <Cpu className="w-8 h-8" />,
      description: "计算机是DCS的核心部分，它负责处理、存储和分析过程数据。",
      details: "在化工DCS系统中，计算机执行控制算法、数据采集、历史数据存储等关键功能，是整个系统的'大脑'。",
      color: "from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)]"
    },
    {
      name: "Communication（通信）",
      icon: <Wifi className="w-8 h-8" />,
      description: "通信是DCS'4C'技术中的重要部分，它像桥梁连接DCS各部件。",
      details: "通过高速数据通道、现场总线等技术，实现控制站、操作站、现场设备之间的实时数据交换。",
      color: "from-[color:var(--system-blue)] to-[color:var(--primary-teal)]"
    },
    {
      name: "CRT（显示）",
      icon: <Monitor className="w-8 h-8" />,
      description: "CRT是DCS'4C'技术里的显示部分。",
      details: "现代DCS使用LCD/LED显示器，提供直观的人机界面，实时显示工艺流程、参数曲线、报警信息等。",
      color: "from-[color:var(--accent-orange)] to-[color:var(--accent-orange-light)]"
    },
    {
      name: "Control（控制）",
      icon: <Server className="w-8 h-8" />,
      description: "DCS的Control（控制）是核心功能，能精准调节参数。",
      details: "通过分散的控制站实现对化工生产过程的精确控制，包括PID控制、顺序控制、批量控制等。",
      color: "from-[color:var(--system-green)] to-[color:var(--primary-teal)]"
    }
  ];

  const dcsGenerations = [
    {
      generation: "第一代",
      period: "1975-1980",
      name: "初创期",
      features: "注重控制功能的实现，分散控制，集中监视",
      systems: "Yokogawa CENTUM、Honeywell TDC-2000、Foxboro Spectrum",
      limitations: "人机界面功能弱、通讯能力差、互换性差、成本高"
    },
    {
      generation: "第二代",
      period: "1980-1985",
      name: "成熟期",
      features: "引入局域网(LAN)作为系统骨干，网络节点概念",
      systems: "Yokogawa CENTUM V、Honeywell TDC-3000、Fisher PROVOX",
      limitations: "系统开放性不足，厂家间兼容性差"
    },
    {
      generation: "第三代",
      period: "1985-2000",
      name: "扩展期",
      features: "采用ISO标准MAP网络，提高系统开放性",
      systems: "Yokogawa CENTUM-XL、Foxboro I/A Series、Bailey INFI-90",
      limitations: "智能化程度有限"
    },
    {
      generation: "第四代",
      period: "2000-2007",
      name: "数字化时代",
      features: "支持智能仪表总线(FF,Hart)，网络速度扩展",
      systems: "Yokogawa CENTUM CS3000、Honeywell TPS、Westinghouse Ovation",
      limitations: "集成度仍需提高"
    },
    {
      generation: "第五代",
      period: "2008至今",
      name: "智能化时代",
      features: "1G高速网络，控制系统一体化、智能化",
      systems: "Yokogawa CENTUM VP、Honeywell PKS、EMERSON Delta V",
      limitations: "持续优化中"
    }
  ];

  const dcsFeatures = {
    title: "DCS的特点：对象分散控制分散-管理集中",
    features: [
      {
        name: "对象分散",
        description: "化工生产中有众多分散的控制对象，如反应釜、换热器等设备分布在不同位置",
        icon: <Layers className="w-6 h-6" />
      },
      {
        name: "控制分散",
        description: "每个对象附近配备相应的控制单元，能独立对所在对象进行实时控制",
        icon: <Globe className="w-6 h-6" />
      },
      {
        name: "管理集中",
        description: "通过中央控制室统一监控管理，实现全局优化和协调控制",
        icon: <Database className="w-6 h-6" />
      }
    ]
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-full mb-4 shadow-lg">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-[color:var(--text-primary)] mb-4">
            DCS基础介绍
          </h1>
          <p className="text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto">
            分布式控制系统(Distributed Control System)的概念、技术构成与发展历程
          </p>
        </motion.div>

        {/* 什么是DCS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-deep p-8 mb-12 border border-[color:var(--primary-teal)]/20"
        >
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] mb-6">
            什么是DCS
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed">
              <span className="font-bold text-[color:var(--primary-teal)]">DCS</span>是
              <span className="font-bold">Distributed Control System</span>的缩写，译为
              <span className="font-bold text-[color:var(--accent-orange)]">分布式控制系统</span>，
              国内自控行业又称为<span className="font-bold">集散控制系统</span>。
            </p>
            <p className="text-[color:var(--text-secondary)] leading-relaxed">
              DCS是由过程控制级和过程监控级组成的以通信网络为纽带的多级计算机系统，
              综合了计算机、通信、显示和控制等"4C"技术，其基本思想是分散控制、集中操作、
              分级管理、配置灵活、组态方便。
            </p>
          </div>
        </motion.div>

        {/* 4C技术详解 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] text-center mb-8">
            "4C"技术详解
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourCTechnology.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 text-center border border-[color:var(--primary-teal)]/10 hover:border-[color:var(--primary-teal)]/30 transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-[color:var(--text-primary)] mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-[color:var(--text-secondary)] mb-3">
                  {tech.description}
                </p>
                <p className="text-xs text-[color:var(--text-muted)]">
                  {tech.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DCS发展历程 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] text-center mb-8">
            DCS发展历程
          </h2>
          
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[color:var(--primary-teal)] to-[color:var(--accent-orange)]" />
            
            <div className="space-y-8">
              {dcsGenerations.map((gen, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* 时间点 */}
                  <div className="w-16 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{gen.generation}</span>
                    </div>
                  </div>
                  
                  {/* 内容 */}
                  <div className="flex-1 glass-light p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-bold text-[color:var(--text-primary)]">
                        {gen.name}
                      </h3>
                      <span className="px-3 py-1 bg-[color:var(--accent-orange)]/20 text-[color:var(--accent-orange)] rounded-full text-sm">
                        {gen.period}
                      </span>
                    </div>
                    <p className="text-[color:var(--text-secondary)] mb-2">
                      <span className="font-semibold">特点：</span>{gen.features}
                    </p>
                    <p className="text-sm text-[color:var(--text-muted)] mb-2">
                      <span className="font-semibold">代表系统：</span>{gen.systems}
                    </p>
                    {gen.limitations && (
                      <p className="text-sm text-[color:var(--system-red)]">
                        <span className="font-semibold">局限性：</span>{gen.limitations}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* DCS特点 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="glass-deep p-8 border border-[color:var(--accent-orange)]/20"
        >
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] mb-8 text-center">
            {dcsFeatures.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dcsFeatures.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[color:var(--text-primary)] mb-2">
                  {feature.name}
                </h3>
                <p className="text-[color:var(--text-secondary)]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-[color:var(--bg-medium)]/50 rounded-lg">
            <p className="text-[color:var(--text-secondary)] text-center">
              这种架构使DCS能够实现高可靠性、高灵活性和高效率的化工生产过程控制，
              既保证了各个控制单元的独立性和实时性，又实现了全局的优化和协调。
            </p>
          </div>
        </motion.div>

        {/* 底部导航 */}
        <div className="mt-16 flex justify-between items-center">
          <Link
            to="/course/automation-control"
            className="btn-glass rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>上一页：自动化控制系统原理</span>
          </Link>
          
          <Link
            to="/course/dcs-structure"
            className="btn-primary rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <span>下一页：DCS结构与组成</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DCSBasicsPage;