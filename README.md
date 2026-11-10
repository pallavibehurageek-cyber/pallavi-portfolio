# Pallavi Behura — Digital Hardware Portfolio

A compact engineering portfolio focused on **VLSI / RTL design, SystemVerilog verification, computer architecture, DSP accelerators and AI/ML hardware**.

**Live site:** https://pallavibehurageek-cyber.github.io/pallavi-portfolio/

**GitHub:** https://github.com/pallavibehurageek-cyber  
**LinkedIn:** https://www.linkedin.com/in/pallavi-behura-547329214/

## Featured work

| Project | Focus |
|---|---|
| [4096-Point FFT/IFFT Accelerator](https://github.com/pallavibehurageek-cyber/Jointly-Optimized-Continuous-Flow-4096-Point-FFT-IFFT-Accelerator) | Continuous-flow DSP architecture, CORDIC optimisation, clock gating and 45 nm synthesis analysis |
| [RISC-V SoC with Custom ML Accelerator](https://github.com/pallavibehurageek-cyber/RISC-V-SoC-Custom-ML-Accelerator) | PicoRV32, AXI4-Lite-to-APB bridge, fixed-point matrix accelerator and bare-metal firmware |
| [AXI4-Lite Programmable PWM IP](https://github.com/pallavibehurageek-cyber/AXI4-Lite-Programmable-PWM-Peripheral-IP-Core) | Peripheral RTL, register map, bus FSMs and self-checking simulation |
| [APB RAM — SystemVerilog Design & Verification](https://github.com/pallavibehurageek-cyber/SV-APB-RAM-RTL-Design-Verification) | APB peripheral and modular testbench with transaction flow and scoreboard |
| [EvoFFT — Mixed-Precision FFT](https://github.com/pallavibehurageek-cyber/EvoFFT-StageWise-MixedPrecision-FFT-Optimizer) | Python-driven exploration of stage-wise FP4/FP8 FFT architectures |
| [Hessian-Guided BFP2 Accelerator](https://github.com/pallavibehurageek-cyber/Hessian-Guided-BFP2-Quantization-Accelerator) | 2-bit block floating-point quantization and channel-scatter datapath; validation in progress |
| [MaskCore CNN Accelerator](https://github.com/pallavibehurageek-cyber/MaskCore-CNN-Accelerator) | In-progress study of arithmetic masking in a CNN datapath; no physical security result is claimed |

## Technical areas

- **RTL and architecture:** Verilog, SystemVerilog, VHDL, FSMs, AXI4-Lite, APB, RISC-V, MIPS32 and fixed-point datapaths.
- **Verification:** SystemVerilog testbenches, transaction generators, drivers, monitors, scoreboards, assertions and waveform debugging.
- **EDA and implementation:** Vivado, Icarus Verilog, GTKWave, Riviera-PRO, Quartus Prime, Cadence Genus, Yosys, OpenROAD, OpenSTA and OpenRAM.
- **Programming and AI/ML:** Python, C, C++, RISC-V Assembly, MATLAB, GNU Octave, Tcl, Bash, PyTorch, NumPy, pandas, SciPy and Jupyter.

## Project status notes

- FFT/IFFT comparisons are repository-reported results under the documented 45 nm flow; power values are pre-clock-tree estimates.
- APB RAM verification and scoreboard refinement remain ongoing.
- BFP2 full reference equivalence and timing closure remain in progress.
- MaskCore is a work in progress. No physical side-channel resistance, certification or tapeout is claimed.
- 128-point FFT RTL is available, but simulation and numerical verification remain pending.

## Implementation

Built with semantic HTML, CSS and vanilla JavaScript. Deployed using GitHub Pages.

To preview locally, clone this repository and open `index.html` in a browser.
