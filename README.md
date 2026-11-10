# Pallavi Behura — Digital Hardware Portfolio

An engineering portfolio focused on **VLSI / RTL design, SystemVerilog verification, computer architecture, DSP accelerators and AI/ML hardware**.

**Live website:** https://pallavibehurageek-cyber.github.io/pallavi-portfolio/  
**GitHub profile:** https://github.com/pallavibehurageek-cyber  
**LinkedIn:** https://www.linkedin.com/in/pallavi-behura-547329214/

## Portfolio structure

The website is organised around:
1. About and primary technical interests
2. Selected engineering projects, with architecture and validation notes
3. Design workflow and implementation/PPA focus
4. Technical toolkit
5. Engineering experience
6. Technical programmes, poster presentation and other ECE projects

## Selected projects

### Continuous-Flow 4096-Point FFT / IFFT Accelerator
A ROM-free, conflict-free radix-16³ architecture exploring occupancy-driven clock gating, CORDIC optimization and memory word-length choices. The repository documents 15/15 functional tests, a 19.08% area reduction and a 54.7% power-estimate reduction at 100% occupancy against a reproduced baseline. Power values are pre-clock-tree estimates in the documented 45 nm flow.

### RISC-V SoC with Custom ML Accelerator
PicoRV32 RV32IM processor, AXI4-Lite-to-APB bridge, 8 KB BRAM, Q4.4 fixed-point 4×4 matrix accelerator, APB UART and bare-metal firmware. Repository-reported FPGA timing includes 158 MHz Fmax and +3.67 ns WNS.

### AXI4-Lite Programmable PWM IP Core
Synthesizable Verilog peripheral with independent read/write paths, AXI4-Lite channel handling, WSTRB-aware register writes, programmable period/duty, breathing mode, status flags and interrupt output.

### APB RAM — SystemVerilog RTL Design & Verification
APB RAM peripheral with transaction-oriented stimulus, generator, driver, monitor and scoreboard components. Functional debug and scoreboard refinement remain ongoing.

### EvoFFT — Stage-Wise Mixed-Precision FFT
Python-driven NSGA-II exploration of stage-wise FP4/FP8 FFT configurations and trade-offs among numerical quality, LUT area, power and latency.

## Active hardware experiments

- **MaskCore CNN Accelerator:** in-progress exploration of arithmetic masking across weights, activations and partial sums. No physical side-channel resistance, security certification or tapeout is claimed.
- **Hessian-Guided BFP2 Accelerator:** in-progress study of Hessian-guided grouping and a 2-bit block-floating-point channel-scatter datapath. Full reference equivalence and hardware validation remain in progress.

## Technical toolkit

| Category | Tools and concepts |
|---|---|
| HDL and RTL | Verilog, SystemVerilog, VHDL, FSMs, datapaths, memory-mapped registers, fixed-point arithmetic |
| Protocols and architecture | AMBA AXI4-Lite, AMBA APB, RISC-V, MIPS32, UART, arbitration and SoC integration |
| Verification | SystemVerilog testbenches, transactions, drivers, monitors, scoreboards, assertions and waveform debug |
| Simulation and FPGA | Xilinx Vivado, Icarus Verilog, GTKWave, Riviera-PRO, Quartus Prime |
| Synthesis and PPA | Cadence Genus, Yosys, OpenROAD, OpenSTA, OpenRAM, timing, area and SAIF-based power analysis |
| Programming | Python, C, C++, RISC-V Assembly, MATLAB, GNU Octave, Tcl and Bash |
| AI/ML and scientific computing | PyTorch, Torchvision, NumPy, pandas, SciPy, Matplotlib and Jupyter |
| Other ECE tools | ANSYS HFSS, Altair FEKO, ESP32, Arduino IDE, OpenCV and MediaPipe |

## Project accuracy notes

- FFT/IFFT metrics are repository-reported comparisons against a reproduced baseline under the documented 45 nm flow. Power estimates are pre-clock-tree.
- SoC timing values are taken from the documented FPGA implementation flow.
- APB RAM functional debug and scoreboard refinement remain ongoing.
- BFP2 full reference equivalence and timing closure remain in progress.
- MaskCore is work in progress. No physical side-channel resistance, security certification or tapeout result is claimed.
- 128-point FFT RTL is available; simulation and numerical verification remain pending.

## Implementation

Built with semantic HTML, responsive CSS and vanilla JavaScript. The project filter controls use lightweight client-side JavaScript. The site is deployed through GitHub Pages.

To preview locally, clone the repository and open `index.html` in a browser.
