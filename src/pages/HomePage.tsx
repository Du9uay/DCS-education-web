import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import {Cpu, Zap,Shield, BookOpen, Users, Award, Target, Settings, Network, Camera, Film, Video, Edit3, Clapperboard, TrendingUp, Lightbulb, ChevronRight, Building2, Briefcase, Rocket, Trophy, Sparkles, CheckCircle, N8N} from '../components/Icons';
import { Activity, Database, Monitor } from 'lucide-react';
import DigitalAvatarPlayer from '../components/DigitalAvatarPlayer';

const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const fullText = '化工DCS分布式控制系统';
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  // 打字机效果
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  // 滚动动画控制
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const courseModules = [
    {
      title: '一、自动化控制系统原理',
      description: '深入理解自动化控制系统的工作原理，掌握传感器、控制器、执行器的功能与协同工作方式。学习PID控制算法、SCADA系统、PLC在化工生产中的应用，为DCS系统学习打下坚实基础。',
      icon: Settings,
      path: '/course/automation-control',
      color: 'from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)]',
      delay: 0.1
    },
    {
      title: '二、DCS基础介绍',
      description: '全面了解DCS的概念、发展历程与"4C"技术构成。学习分布式控制系统的特点：对象分散、控制分散、管理集中。掌握DCS在化工生产中的应用优势与技术前景。',
      icon: Cpu,
      path: '/course/dcs-basics',
      color: 'from-[color:var(--system-blue)] to-[color:var(--primary-teal)]',
      delay: 0.2
    },
    {
      title: '三、DCS结构与组成',
      description: '系统学习DCS的硬件组成（过程控制站、操作站、通讯网络）与软件系统（组态软件、实时数据库、HMI）。掌握各组件功能及在化工生产中的实际应用。',
      icon: Network,
      path: '/course/dcs-structure',
      color: 'from-[color:var(--accent-orange)] to-[color:var(--accent-orange-light)]',
      delay: 0.3
    },
    {
      title: '四、DCS信号类型',
      description: '掌握模拟量（AI/AO）与数字量（DI/DO）信号的区分与处理。学习压力变送器、流量计、调节阀等仪表设备的信号采集与控制应用。',
      icon: Activity,
      path: '/course/dcs-signal-types',
      color: 'from-[color:var(--system-green)] to-[color:var(--primary-teal)]',
      delay: 0.4
    },
    {
      title: '五、DCS与PLC的区别',
      description: '深入对比DCS与PLC在控制目标、应用领域的差异。了解DCS适用于大规模连续过程控制，PLC适用于逻辑顺序控制，掌握在化工生产中的选型原则。',
      icon: Database,
      path: '/course/dcs-vs-plc',
      color: 'from-[color:var(--primary-teal-light)] to-[color:var(--system-blue)]',
      delay: 0.5
    }
  ];

  const careers = [
    {
      title: "化工DCS操作员",
      icon: <Monitor className="w-8 h-8" />,
      description: "负责DCS系统的日常操作与监控，确保化工生产过程的稳定运行",
      responsibilities: [
        {
          title: "DCS系统界面深度操作",
          desc: "熟练调用控制画面组态信息，完成PID参数整定与复杂控制回路投运"
        },
        {
          title: "生产过程实时监控",
          desc: "跟踪300+工艺参数趋势曲线，识别温度/压力/流量异常波动并提前干预"
        },
        {
          title: "联锁逻辑管理与测试",
          desc: "执行DCS系统联锁逻辑的强制/复位操作，每月开展全系统安全联锁测试"
        },
        {
          title: "报警分级处置",
          desc: "根据报警优先级（紧急/重要/一般）执行差异化响应流程，压缩处置时间30%"
        },
        {
          title: "操作日志数字化管理",
          desc: "通过SCADA系统生成生产操作电子记录，支持历史数据追溯分析"
        }
      ],
      color: "from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)]"
    },
    {
      title: "化工中控员",
      icon: <Settings className="w-8 h-8" />,
      description: "在中央控制室负责整个生产装置的监控与调度，是化工生产的'指挥官'",
      responsibilities: [
        {
          title: "全流程生产协调",
          desc: "统筹反应/分离/精馏多单元操作，平衡各工序产能实现日产千吨目标"
        },
        {
          title: "能效优化控制",
          desc: "通过调节泵频与换热网络参数，将单位产品能耗降低至行业基准值以下"
        },
        {
          title: "紧急工况处置",
          desc: "在压力骤升/物料泄漏等紧急情况下，启动SIS系统并指挥现场应急处置"
        },
        {
          title: "质量闭环控制",
          desc: "根据在线分析仪表数据动态调整工艺参数，确保产品合格率≥99.8%"
        },
        {
          title: "跨班组生产交接",
          desc: "编制包含工艺状态/待办事项/风险提示的数字化交接报告，确保生产连续性"
        }
      ],
      color: "from-[color:var(--system-blue)] to-[color:var(--primary-teal)]"
    },
    {
      title: "DCS系统工程师",
      icon: <Database className="w-8 h-8" />,
      description: "负责DCS系统的设计、配置、维护与优化，是自动化控制的技术专家",
      responsibilities: [
        {
          title: "系统设计与实施",
          desc: "根据工艺要求设计DCS控制方案，完成硬件选型与软件配置"
        },
        {
          title: "控制策略优化",
          desc: "开发高级控制算法，优化PID参数，提升控制精度与稳定性"
        },
        {
          title: "故障诊断与维护",
          desc: "快速定位系统故障，制定维护计划，确保系统可用率≥99.5%"
        },
        {
          title: "系统升级改造",
          desc: "评估新技术应用，实施系统升级，提升自动化水平"
        },
        {
          title: "技术培训与支持",
          desc: "为操作人员提供技术培训，编制操作手册与技术文档"
        }
      ],
      color: "from-[color:var(--accent-orange)] to-[color:var(--accent-orange-light)]"
    },
    {
      title: "仪表维护工程师",
      icon: <Shield className="w-8 h-8" />,
      description: "负责现场仪表设备的安装、调试、维护，确保测量与控制的准确性",
      responsibilities: [
        {
          title: "仪表安装调试",
          desc: "按照规范完成各类仪表的安装、接线、标定与调试工作"
        },
        {
          title: "预防性维护",
          desc: "制定维护计划，定期检查校验，预防故障发生"
        },
        {
          title: "故障快速处理",
          desc: "24小时响应故障报修，快速恢复仪表正常运行"
        },
        {
          title: "技术改造升级",
          desc: "评估新型仪表应用，实施技术改造提升测控水平"
        },
        {
          title: "备件管理",
          desc: "建立备件库存管理系统，确保关键备件充足"
        }
      ],
      color: "from-[color:var(--system-green)] to-[color:var(--primary-teal)]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const cardHover = {
    scale: 1.02,
    y: -8,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 30
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 主标题区域 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ y }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-full mb-6 shadow-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.3 }
            }}
          >
            <Shield className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 className="text-5xl font-bold text-[color:var(--text-primary)] mb-6 leading-tight">
            <span className="inline-block bg-gradient-to-r from-[color:var(--primary-teal-light)] to-[color:var(--accent-orange)] bg-clip-text text-transparent">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-[color:var(--accent-orange)]"
              >
                |
              </motion.span>
            </span>
            <motion.span 
              className="block text-2xl font-normal text-[color:var(--text-secondary)] mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              化工生产过程自动化控制核心技术
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-[color:var(--text-secondary)] max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            系统学习DCS分布式控制系统原理，掌握自动化控制核心技术，
            培养化工生产过程控制、系统配置与故障诊断的专业能力。
          </motion.p>
        </motion.div>

        {/* 新增大标题：为什么要学习这节课 */}
        <motion.section
          className="mb-16 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[color:var(--primary-teal-light)] via-[color:var(--system-blue)] to-[color:var(--accent-orange)] bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            为什么要学习这节课
          </motion.h1>
          <motion.p
            className="text-lg text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            化工自动化助力企业智能转型提升效率，抢占未来市场！
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* 数字人播放器1 - 为什么要学习这节课标题 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYqXCNXy5Z3.mov"
            position={{ top: 0, right: '-16rem' }}
          />
        </motion.section>

        {/* 第一部分：为什么要关注行业 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要关注行业</h2>
              <p className="text-white mt-2">化工自动化助力企业智能转型提升效率，抢占未来市场！</p>
            </div>
          </motion.div>

          {/* 主内容区 - 大卡片 */}
          <motion.div
            className="glass-cinema p-12 relative overflow-hidden mb-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要关注行业_背景图.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 装饰性背景元素 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--gold-cinema)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[color:var(--accent-sand-500)]/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* 原因与现状 - 全宽展示 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-[color:var(--primary-teal-light)]">行业现状与机遇</span>
                </h3>

                {/* 四个核心数据点 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {/* 千亿级市场规模 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--primary-teal)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要关注行业_原因与现状_政策推动_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(10, 123, 140, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="w-8 h-8 text-[color:var(--primary-teal-light)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">政策推动</h4>
                    <p className="text-white text-sm">
                      国家在"十四五"规划中<span className="font-bold text-[color:var(--primary-teal-light)]">明确提出智能制造与数字化转型的目标</span>，推动制造业向高端化、智能化、绿色化方向发展。
                    </p>
                  </motion.div>

                  {/* 市场需求增长 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--primary-teal)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要关注行业_原因与现状_市场需求增长_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(10, 123, 140, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Building2 className="w-8 h-8 text-[color:var(--primary-teal-light)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">市场需求增长</h4>
                    <p className="text-white text-sm">
                      随着石化、制药、新能源等行业的蓬勃发展，化工企业<span className="font-bold text-[color:var(--primary-teal-light)]">不仅要求降低能耗、提高生产效率，还要在生产过程中实现智能化管控</span>，这为自动化控制系统提供了巨大的市场空间。
                    </p>
                  </motion.div>

                  {/* 技术突破 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--primary-teal)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要关注行业_原因与现状_技术突破_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(10, 123, 140, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Film className="w-8 h-8 text-[color:var(--primary-teal-light)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">技术突破</h4>
                    <p className="text-white text-sm">
                      <span className="font-bold text-[color:var(--primary-teal-light)]">AI、物联网（IoT）、大数据等技术的成熟</span>，推动了化工自动化技术的创新与升级，DCS、PLC等自动化控制系统逐渐成为化工生产过程中的核心技术。
                    </p>
                  </motion.div>

                  {/* 复合型人才短缺 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--primary-teal)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要关注行业_原因与现状_复合型人才短缺_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(10, 123, 140, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Network className="w-8 h-8 text-[color:var(--primary-teal-light)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">复合型人才短缺</h4>
                    <p className="text-white text-sm">
                      由于技术复杂性和应用领域的广泛性，企业急需既懂技术又能快速上手的复合型专业人才。尤其是<span className="text-[color:var(--primary-teal-light)] font-bold">具备AI应用、预测性维护等能力的高技能工程师</span>。
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* 结果导向 - 分为两列 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-[color:var(--primary-teal-light)]">发展机遇</span>
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* 对企业而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-[color:var(--primary-teal)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要关注行业_结果导向_对企业来说_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(10, 123, 140, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Target className="w-10 h-10 text-[color:var(--primary-teal-light)] mr-3" />
                      <h4 className="text-2xl font-bold text-[color:var(--primary-teal-light)]">对企业来说</h4>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      精确的<span className="font-bold text-[color:var(--primary-teal-light)]">自动化控制系统能够大幅提升生产效率</span>，降低能源消耗，同时加强生产过程中的安全管理和风险防控，为企业创造更高的利润和可持续的竞争优势。
                    </p>
                  </motion.div>

                  {/* 对学生而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-[color:var(--primary-teal)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要关注行业_结果导向_对个人来说_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(10, 123, 140, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Users className="w-10 h-10 text-[color:var(--primary-teal-light)] mr-3" />
                      <h4 className="text-2xl font-bold text-[color:var(--primary-teal-light)]">对学生来说</h4>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      通过学习和掌握化工自动化领域的核心技能，学生将具备成为技术专家的能力，能<span className="font-bold text-[color:var(--primary-teal-light)]">迅速适应智能制造的应用需求</span>，从而在职场中<span className="font-bold text-[color:var(--primary-teal-light)]">获得更具竞争力的薪酬和职业发展空间</span>。
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 数字人播放器2 - 为什么要关注行业 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYJjoXgUIyO.mov"
            position={{ top: 380, right: '-16rem' }}
          />
        </motion.section>

        {/* 第二部分：为什么要分清企业类型 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20 relative"
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要分清企业类型？</h2>
              <p className="text-white mt-2">精准定位，明确企业类型，为职业发展奠定坚实基础</p>
            </div>
          </motion.div>

          {/* 主内容区 - 阶梯式企业类型布局 */}
          <div className="relative max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* 上游企业 */}
              <motion.div
                className="relative max-w-3xl mr-auto ml-0"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Building2 className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--primary-teal)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要分清企业类型_上游企业_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--primary-teal)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--primary-teal-light)]">上游企业</h3>
                        <span className="text-[color:var(--primary-teal-light)]/60 text-sm font-semibold">基础资源</span>
                      </div>
                      <p className="text-white text-base mb-6">主要提供化工自动化所需的"硬件"与"基础条件"，相当于资源型和服务型供应商。</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--primary-teal-light)] rounded-full animate-pulse"></div>
                          <span className="text-white text-sm">自动化设备供应商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--primary-teal-light)] rounded-full animate-pulse"></div>
                          <span className="text-white text-sm">仪器仪表公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--primary-teal-light)] rounded-full animate-pulse"></div>
                          <span className="text-white text-sm">自动化控制软件公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--primary-teal-light)] rounded-full animate-pulse"></div>
                          <span className="text-white text-sm">工业数据分析软件公司</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <ChevronRight className="w-10 h-10 text-[color:var(--primary-teal)]/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 中游企业 */}
              <motion.div
                className="relative max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Camera className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--primary-teal)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要分清企业类型_中游企业_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--primary-teal)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--primary-teal-light)]">中游企业</h3>
                        <span className="text-[color:var(--primary-teal-light)]/60 text-sm font-semibold">集成运维</span>
                      </div>
                      <p className="text-white text-base mb-6">核心是自动化控制系统的集成与运维，即负责将上游资源整合并提供完整的自动化解决方案。</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--primary-teal-light)] rounded-full animate-pulse"></div>
                          <span className="text-white text-sm">自动化集成商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--primary-teal-light)] rounded-full animate-pulse"></div>
                          <span className="text-white text-sm">智能制造技术咨询与解决方案提供商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--primary-teal-light)] rounded-full animate-pulse"></div>
                          <span className="text-white text-sm">预测性维护与数据分析公司</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    <ChevronRight className="w-10 h-10 text-[color:var(--primary-teal)]/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 下游企业 */}
              <motion.div
                className="relative max-w-3xl ml-auto mr-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Users className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--primary-teal)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要分清企业类型_下游企业_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: -10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--primary-teal)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--primary-teal-light)]">下游企业</h3>
                        <span className="text-[color:var(--primary-teal-light)]/60 text-sm font-semibold">实施应用</span>
                      </div>
                      <p className="text-white text-base mb-6">面向最终的企业客户与政府监管单位，直接推动自动化系统的实施与应用。</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--primary-teal-light)] rounded-full animate-pulse"></div>
                          <span className="text-white text-sm">化工企业</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--primary-teal-light)] rounded-full animate-pulse"></div>
                          <span className="text-white text-sm">环保监测公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--primary-teal-light)] rounded-full animate-pulse"></div>
                          <span className="text-white text-sm">政府监管机构</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--primary-teal-light)] rounded-full animate-pulse"></div>
                          <span className="text-white text-sm">产业园区与智能制造示范基地</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-[color:var(--primary-teal)]/10 to-[color:var(--primary-teal-light)]/10 rounded-2xl border border-[color:var(--primary-teal)]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-white text-lg font-semibold text-center">
              上下游不同，掌握的技术与技能要求也各不相同，要明晰个人定位，才能选择最适合自己的职业发展方向。
            </p>
          </motion.div>

          {/* 数字人播放器3 - 为什么要分清企业类型 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYJjoXgvm3X.mov"
            position={{ top: 200, right: '-16rem' }}
          />
        </motion.section>

        {/* 第三部分：关于岗位你该知道的是 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-2xl mr-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">关于岗位你该知道的是</h2>
              <p className="text-white mt-2">清晰定位岗位，掌握化工DCS技术，成为行业急需的复合型人才</p>
            </div>
          </motion.div>

          {/* 岗位分类卡片 */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {/* 自动化控制系统设计与开发 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--primary-teal)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/关于岗位你该知道的是_有哪些岗位_自动化控制系统设计与开发_背景图.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--primary-teal)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--primary-teal-light)] rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--primary-teal-light)] ml-3">系统设计与开发</h3>
                </div>
                <p className="text-white text-sm mb-4">负责自动化控制系统的设计、安装、调试和优化，确保生产线的自动化运行和系统的高效性</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">DCS工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">PLC程序设计师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">控制系统工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">自动化仪表工程师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 设备选型调试 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--primary-teal)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/关于岗位你该知道的是_有哪些岗位_设备选型与调试_背景图.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--primary-teal)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--primary-teal-light)] rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--primary-teal-light)] ml-3">设备选型调试</h3>
                </div>
                <p className="text-white text-sm mb-4">负责自动化生产设备和仪器的选型、安装、调试与维护，确保设备的稳定性和生产效率</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">仪器仪表工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">传感器技术工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">工艺设备工程师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 项目现场管理 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--primary-teal)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/关于岗位你该知道的是_有哪些岗位_项目管理与现场实施_背景图.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--primary-teal)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--primary-teal-light)] rounded-xl flex items-center justify-center">
                    <Edit3 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--primary-teal-light)] ml-3">项目现场管理</h3>
                </div>
                <p className="text-white text-sm mb-4">负责自动化控制项目的管理与现场执行，确保项目按时交付、按质完成</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">DCS技术员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">设备运维工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">PLC技术员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">现场调试工程师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 技术支持 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--primary-teal)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/关于岗位你该知道的是_有哪些岗位_系统集成与技术支持_背景图.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--primary-teal)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--primary-teal-light)] rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--primary-teal-light)] ml-3">技术支持</h3>
                </div>
                <p className="text-white text-sm mb-4">负责将设计的自动化系统进行集成，提供技术支持和维护，确保系统的稳定运行</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">自动化系统集成工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">技术支持工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--primary-teal-light)]" />
                    <span className="text-white text-sm">售后支持工程师</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 普遍要求与待遇 */}
          <motion.div
            className="glass-cinema p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[color:var(--primary-teal)]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[color:var(--primary-teal-light)] mb-6 text-center">行业要求与待遇</h3>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--primary-teal)]/20 to-[color:var(--primary-teal-light)]/20 border border-[color:var(--primary-teal)]/30">
                  <div className="text-2xl font-bold text-[color:var(--primary-teal-light)] mb-2">门槛要求</div>
                  <p className="text-white text-sm"><span className="font-bold">技术/经验要求＞学历要求</span>，注重实际操作能力，能够快速上手并解决实际问题</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--primary-teal)]/20 to-[color:var(--primary-teal-light)]/20 border border-[color:var(--primary-teal)]/30">
                  <div className="text-2xl font-bold text-[color:var(--primary-teal-light)] mb-2">平均薪资</div>
                  <p className="text-white text-sm">行业平均薪资在8K+，并根据项目提成，收入潜力巨大，<span className="font-bold">经验积累后薪资增长迅速</span>，达到20K以上不再是难题</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--primary-teal)]/20 to-[color:var(--primary-teal-light)]/20 border border-[color:var(--primary-teal)]/30">
                  <div className="text-2xl font-bold text-[color:var(--primary-teal-light)] mb-2">职业前景</div>
                  <p className="text-white text-sm">随着经验的积累和技能的提升，<span className="font-bold">职位晋升空间大</span>，成为高薪岗位的核心人才</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--primary-teal)]/20 to-[color:var(--primary-teal-light)]/20 border border-[color:var(--primary-teal)]/30">
                  <div className="text-2xl font-bold text-[color:var(--primary-teal-light)] mb-2">作业特点</div>
                  <p className="text-white text-sm"><span className="font-bold">工作环境灵活</span>，部分岗位可能涉及现场工作与出差，提供稳定的岗位发展和个人成长空间</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 数字人播放器4 - 关于岗位你该知道的是 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYJjoXgR0vZ.mov"
            position={{ top: 200, right: '-16rem' }}
          />
        </motion.section>

        {/* 第四部分：通过学习，你能学到什么 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-2xl mr-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">通过学习，你能学到什么？</h2>
              <p className="text-white mt-2">掌握DCS技能，快速上手实战，提升你的工作能力</p>
            </div>
          </motion.div>

          {/* 主内容区 - 课程大纲和技能 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* 课程核心内容卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--primary-teal)]/10 to-[color:var(--primary-teal-light)]/10 p-8 border border-[color:var(--primary-teal)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/标题三_浓缩十余年的核心经验_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--primary-teal)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--primary-teal-light)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--primary-teal-light)]">核心课程内容</h3>
                </div>

                <div className="space-y-4">
                  {/* 自动化控制基础 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">自动化控制基础</span>
                    <div className="text-white text-sm mt-2 space-y-1">
                      <p>• 化工自动化全景解读（1节）</p>
                      <p>• 流体流动原理与应用基础（2节）</p>
                      <p>• 智能制造生产线探索（1节）</p>
                    </div>
                  </div>

                  {/* 化工仪器与设备技术 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">化工仪器与设备技术</span>
                    <div className="text-white text-sm mt-2 space-y-1">
                      <p>• 化工仪器与仪表全解析（2节）</p>
                      <p>• 执行器与阀门技术深度剖析（2节）</p>
                    </div>
                  </div>

                  {/* 自动化控制系统核心 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">自动化控制系统核心</span>
                    <div className="text-white text-sm mt-2 space-y-1">
                      <p>• 自动化控制系统核心技术（2节）</p>
                      <p>• 化工PLC实战应用（1节）</p>
                      <p>• 化工DCS全流程掌握（1节）</p>
                    </div>
                  </div>

                  {/* 数据监控与安全系统 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">数据监控与安全系统</span>
                    <div className="text-white text-sm mt-2 space-y-1">
                      <p>• 化工SCADA应用精讲（1节）</p>
                      <p>• 化工SIS保障方案（1节）</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 实战技能卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--primary-teal-light)]/10 to-[color:var(--primary-teal)]/10 p-8 border border-[color:var(--primary-teal-light)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/通过学习，你能学到什么_本节课核心内容_背景图.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--primary-teal-light)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--primary-teal-light)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--primary-teal-light)]">本单元课程重点</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-[color:var(--primary-teal-light)]" />
                      <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">理解自动化控制系统、PLC、DCS等在化工中的应用</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-[color:var(--primary-teal-light)]" />
                      <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">了解流体力学对化工生产的影响及应用</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-[color:var(--primary-teal-light)]" />
                      <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">学习如何提升生产线的自动化和效率</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-[color:var(--primary-teal-light)]" />
                      <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">掌握仪器设备的选型、操作与调试，确保精准控制</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-[color:var(--primary-teal-light)]" />
                      <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">了解SCADA与SIS如何提升生产安全与稳定性</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 案例分析和工具应用 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 涉及到的大型案例 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--primary-teal)]/10 to-[color:var(--primary-teal-light)]/10 p-8 border border-[color:var(--primary-teal)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/通过学习，你能学到什么_大型案例分析_背景图.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--primary-teal)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--primary-teal-light)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--primary-teal-light)]">涉及到的大型案例</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--primary-teal-light)]" />
                      <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">恒力石化炼化一体化项目全厂DCS系统集成项目</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--primary-teal-light)]" />
                      <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">中国石化天津分公司丙烯项目DCS与上位机系统集成项目</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 涉及到 AI 工具教学 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--primary-teal)]/10 to-[color:var(--primary-teal-light)]/10 p-8 border border-[color:var(--primary-teal)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/标题三_前沿的AI工具_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--primary-teal)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--primary-teal-light)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--primary-teal-light)]">涉及到 AI 工具教学</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[color:var(--primary-teal-light)]" />
                      <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">Emerson DeltaV</span>
                    </div>
                    <p className="text-white text-sm mt-1">AI辅助的自动化控制平台，用于增强石化生产过程的智能化管理，提高生产安全与稳定性</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <N8N className="w-5 h-5 text-[color:var(--primary-teal-light)]" />
                      <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">N8N</span>
                    </div>
                    <p className="text-white text-sm mt-1">自动化工作流工具，帮助学生理解如何集成数据采集与控制系统，简化流程，自动生成报告与数据流</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Database className="w-5 h-5 text-[color:var(--primary-teal-light)]" />
                      <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">LabWare LIMS</span>
                    </div>
                    <p className="text-white text-sm mt-1">用于化工自动化中的样品管理和数据追踪，确保实验数据的实时采集与完整性，助力高效操作</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-[color:var(--primary-teal-light)]" />
                      <span className="text-[color:var(--primary-teal-light)] font-semibold text-base">Rockwell Automation FactoryTalk</span>
                    </div>
                    <p className="text-white text-sm mt-1">通过AI驱动的实时数据分析平台优化生产过程，帮助理解智能工厂的运作与管理</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 数字人播放器5 - 通过学习你能学到什么 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYJjoXgcR4e.mov"
            position={{ top: 300, right: '-16rem' }}
          />
        </motion.section>

        {/* 第五部分：岗位晋升路径 */}
        <motion.section className="mb-20 relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.div
            className="bg-gradient-to-r from-[color:var(--primary-teal)]/10 to-[color:var(--primary-teal-light)]/10 rounded-3xl p-8 border border-[color:var(--primary-teal)]/20"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="w-10 h-10 text-[color:var(--primary-teal-light)]" />
              <h2 className="text-3xl font-bold text-white">岗位晋升路径</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-gradient-to-br from-[color:var(--primary-teal)]/10 to-[color:var(--system-blue)]/10 rounded-2xl p-6 border border-[color:var(--primary-teal)]/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-[color:var(--primary-teal-light)] mb-2">初级职位</div>
                <div className="text-3xl font-bold text-white mb-4">8K-15K</div>
                <div className="text-white text-sm">
                  <div>DCS技术员/PLC技术员</div>
                  <div>现场调试工程师</div>
                  <div>仪表维护技术员</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[color:var(--primary-teal-light)]/10 to-[color:var(--accent-orange)]/10 rounded-2xl p-6 border border-[color:var(--primary-teal-light)]/20 text-center"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-[color:var(--primary-teal-light)] mb-2">中级职位</div>
                <div className="text-3xl font-bold text-white mb-4">15K-25K</div>
                <div className="text-white text-sm">
                  <div>DCS工程师/PLC工程师</div>
                  <div>自动化系统集成工程师</div>
                  <div>控制系统设计工程师</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[color:var(--primary-teal)]/10 to-[color:var(--system-blue)]/10 rounded-2xl p-6 border border-[color:var(--primary-teal)]/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-[color:var(--primary-teal-light)] mb-2">高级职位</div>
                <div className="text-3xl font-bold text-white mb-4">25K+</div>
                <div className="text-white text-sm">
                  <div>自动化项目经理/技术总监</div>
                  <div>DCS系统架构师</div>
                  <div>自动化技术专家</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* 第六部分：职业发展方向 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 页面标题 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[color:var(--primary-teal)] to-[color:var(--primary-teal-light)] rounded-full mb-4 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              职业发展方向
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              化工DCS控制系统相关岗位介绍，助力你在自动化控制领域实现职业发展
            </p>
          </motion.div>

          {/* 岗位介绍 */}
          <div className="space-y-12">
            {careers.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="glass-deep p-8 border border-[color:var(--primary-teal)]/10 hover:border-[color:var(--primary-teal)]/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${career.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    {career.icon}
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {career.title}
                      </h2>
                      <p className="text-white">
                        {career.description}
                      </p>
                    </div>

                    {/* 岗位职责 */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-4">
                        岗位职责
                      </h3>
                      <div className="space-y-3">
                        {career.responsibilities.map((resp, respIndex) => (
                          <div key={respIndex} className="glass-light p-4">
                            <h4 className="font-semibold text-[color:var(--primary-teal)] mb-1">
                              {respIndex + 1}. {resp.title}
                            </h4>
                            <p className="text-sm text-white">
                              {resp.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 数字人播放器6 - 职业发展方向 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYJjoXgLPk7.mov"
            position={{ top: 100, right: '-16rem' }}
          />
        </motion.section>

        {/* 学习路径指引 - 弹簧动画 */}
        <motion.div 
          className="glass-deep rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden border border-[color:var(--primary-teal)]/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: 0.2 
          }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.6)",
            borderColor: "rgba(10, 123, 140, 0.4)"
          }}
        >
          {/* 背景动画粒子效果 */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 50%, rgba(10, 123, 140, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(255, 107, 53, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(10, 123, 140, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(10, 123, 140, 0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <motion.h2 
            className="text-3xl font-bold text-[color:var(--text-primary)] mb-6 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            开启DCS控制系统学习之旅
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[color:var(--text-secondary)] mb-8 max-w-2xl mx-auto relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            循序渐进掌握DCS核心技术，从基础原理到实践应用，成为化工自动化控制专家。
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(255,107,53,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/course/automation-control"
                className="btn-primary rounded-xl font-semibold transition-all duration-300 shadow-lg inline-block flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                开始学习
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;