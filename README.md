# Pallavi Behura — RTL Design, Verification & AI/ML Hardware

A responsive engineering portfolio showcasing project work in **VLSI / RTL design, functional verification, computer architecture, DSP accelerators and AI/ML hardware**.

**Live portfolio:** https://pallavibehurageek-cyber.github.io/pallavi-portfolio/

**GitHub:** https://github.com/pallavibehurageek-cyber  
**LinkedIn:** https://www.linkedin.com/in/pallavi-behura-547329214/

## Current focus

- Digital Design / RTL using Verilog and SystemVerilog
- Design Verification with transaction-based testbenches, scoreboards and waveform debug
- AI/ML hardware, quantization and accelerator architecture
- FPGA implementation, synthesis and PPA evaluation

## Featured engineering projects

| Project | Focus |
|---|---|
| [4096-Point FFT/IFFT Accelerator](https://github.com/pallavibehurageek-cyber/Jointly-Optimized-Continuous-Flow-4096-Point-FFT-IFFT-Accelerator) | Continuous-flow DSP architecture, clock gating, CORDIC optimisation, numerical verification and 45 nm synthesis analysis |
| [RISC-V SoC with Custom ML Accelerator](https://github.com/pallavibehurageek-cyber/RISC-V-SoC-Custom-ML-Accelerator) | PicoRV32, AXI4-Lite-to-APB bridge, memory-mapped peripherals, fixed-point matrix accelerator and bare-metal firmware |
| [AXI4-Lite Programmable PWM IP](https://github.com/pallavibehurageek-cyber/AXI4-Lite-Programmable-PWM-Peripheral-IP-Core) | Synthesizable peripheral RTL, independent bus FSMs, WSTRB-aware registers and self-checking simulation |
| [APB RAM — SystemVerilog Design & Verification](https://github.com/pallavibehurageek-cyber/SV-APB-RAM-RTL-Design-Verification) | APB peripheral, transaction generator/driver/monitor/scoreboard structure and simulation debug |
| [EvoFFT — Mixed-Precision FFT Optimizer](https://github.com/pallavibehurageek-cyber/EvoFFT-StageWise-MixedPrecision-FFT-Optimizer) | Python-driven NSGA-II design-space exploration for stage-wise FP4/FP8 FFT architectures |
| [Hessian-Guided BFP2 Accelerator](https://github.com/pallavibehurageek-cyber/Hessian-Guided-BFP2-Quantization-Accelerator) | Hessian-guided grouping, 2-bit block floating point and channel-scatter hardware/software co-design |
| [MaskCore — Side-Channel-Aware CNN Accelerator](https://github.com/pallavibehurageek-cyber/MaskCore-CNN-Accelerator) | **In progress:** arithmetic-masking study, protected CNN datapath exploration and implementation-overhead evaluation |

## Additional digital design work

- [Weighted Round-Robin Arbiter](https://github.com/pallavibehurageek-cyber/Weighted-Round-Robin-Arbiter-Verilog)
- [RISC-MIPS32 CPU](https://github.com/pallavibehurageek-cyber/RISC-MIPS32-CPU-Verilog)
- [8-bit UART Communication System](https://github.com/pallavibehurageek-cyber/8-bit-RTL-UART-Communication-System)
- [Verilog Electronic Voting Machine](https://github.com/pallavibehurageek-cyber/electronic-voting-machine-using-verilog-in-xilinx-vivado)
- [128-Point Fixed-Point FFT Accelerator](https://github.com/pallavibehurageek-cyber/128-Point-Fixed-Point-FFT-Hardware-Accelerator)

## Technical toolkit

**HDL and digital design:** Verilog, SystemVerilog, VHDL, FSMs, datapaths, fixed-point arithmetic, memory-mapped registers, AXI4-Lite, APB, RISC-V and MIPS32.

**Verification:** SystemVerilog testbenches, transaction generation, drivers, monitors, scoreboards, assertions, self-checking tests and waveform debugging.

**Accelerators and architecture:** FFT/IFFT, CORDIC, clock gating, MAC datapaths, matrix acceleration, mixed precision, BFP2 quantization and CNN datapath exploration.

**Simulation, synthesis and implementation:** Vivado, Icarus Verilog, GTKWave, Riviera-PRO, Cadence Genus, Yosys, OpenROAD, OpenSTA, Quartus Prime and SAIF-based power analysis.

**Programming and scientific computing:** Python, C, C++, RISC-V Assembly, MATLAB, GNU Octave, Tcl, Bash, PyTorch, NumPy, pandas, SciPy, Matplotlib and Jupyter.

## Experience and technical programmes

- **DRDL — Design of Controller for Embedded System:** FPGA/VHDL controller work using Xilinx Spartan-3AN, hardware/software interlocks and RS-232.
- **NIELIT × SoCTeamup Semiconductors:** 30-hour bootcamp on RTL, IP integration and SoC signoff.
- **IETE Hyderabad Centre:** Embedded IoT Application Development programme.
- **45th National Symposium on Instrumentation (NSI-45):** poster presentation on graphene MEMS RF switches for UAV radar beam steering.

## Project-status and accuracy notes

- The 4096-point FFT/IFFT results are repository-reported comparisons against a reproduced baseline under the documented 45 nm flow. Power estimates are pre-clock-tree results.
- The APB RAM repository contains a modular verification environment, simulation logs and waveform artifacts; scoreboard refinement and functional debug remain ongoing.
- The Hessian/BFP2 repository documents limitations in numerical equivalence and hardware routing; software-model accuracy should not be presented as end-to-end hardware-verified accuracy.
- MaskCore is an active work-in-progress. No physical side-channel resistance, security certification or tapeout result is claimed.
- The 128-point FFT repository still needs simulation and numerical verification.

## Built with

HTML5, CSS3 and vanilla JavaScript. The site is responsive and deployed with GitHub Pages.

To run locally, clone this repository and open \`index.html\` in a browser.
