import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

class ProfilePage extends StatefulWidget {
  final VoidCallback onBack;
  final VoidCallback? onMenu;
  const ProfilePage({super.key, required this.onBack, this.onMenu});

  @override
  State<ProfilePage> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  late ScrollController _scrollController;
  bool _showHeader = true;

  @override
  void initState() {
    super.initState();
    _scrollController = ScrollController();
    _scrollController.addListener(() {
      if (_scrollController.position.userScrollDirection == ScrollDirection.reverse) {
        if (_showHeader) {
          setState(() {
            _showHeader = false;
          });
        }
      } else if (_scrollController.position.userScrollDirection == ScrollDirection.forward) {
        if (!_showHeader) {
          setState(() {
            _showHeader = true;
          });
        }
      }
    });
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bgColor = isDark ? Colors.black : Colors.white;
    final textColor = isDark ? Colors.white : Colors.black;
    final subtitleColor = isDark ? Colors.grey.shade400 : Colors.grey.shade600;

    return Container(
      color: bgColor,
      width: double.infinity,
      child: Stack(
        children: [
          SingleChildScrollView(
            controller: _scrollController,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(height: MediaQuery.of(context).padding.top + 79),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
                  child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            width: 80,
                            height: 100,
                            decoration: BoxDecoration(
                              color: isDark ? Colors.grey.shade800 : Colors.grey.shade200,
                              shape: BoxShape.circle,
                              border: Border.all(
                                  color: isDark ? Colors.grey.shade600 : Colors.grey.shade300, 
                                  width: 2),
                            ),
                            child: Icon(Icons.person, size: 40, color: isDark ? Colors.grey.shade400 : Colors.grey.shade600),
                          ),
                          const SizedBox(width: 16),
                          Padding(
                            padding: const EdgeInsets.only(top: 8.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Tanzania Vibes',
                                  style: TextStyle(
                                      color: textColor,
                                      fontSize: 20,
                                      fontWeight: FontWeight.bold),
                                ),
                                const SizedBox(height: 4),
                                Text(
                                  '@tanzania_vibes',
                                  style: TextStyle(
                                      color: subtitleColor,
                                      fontSize: 16,
                                      fontWeight: FontWeight.w600),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 8),
                    
                    // Bio
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 16),
                      child: Text(
                        'Kila kitu kama kilivyo! 🇹🇿 #tiktok #tanzania\nKaribu kwenye vibes za bongo.',
                        style: TextStyle(color: textColor, fontSize: 14, fontWeight: FontWeight.w500),
                      ),
                    ),
                    const SizedBox(height: 8),
                    
                    // Count Status
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 16),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          _buildStat('120', 'Following', textColor, subtitleColor),
                          const SizedBox(width: 24),
                          _buildStat('1.5M', 'Followers', textColor, subtitleColor),
                          const SizedBox(width: 24),
                          _buildStat('14M', 'Likes', textColor, subtitleColor),
                        ],
                      ),
                    ),
                    const SizedBox(height: 8),
                    
                    // Buttons
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 16),
                      child: Row(
                        children: [
                          Expanded(
                            child: OutlinedButton(
                              onPressed: () {},
                              style: OutlinedButton.styleFrom(
                                padding: const EdgeInsets.symmetric(vertical: 10),
                                side: BorderSide(color: isDark ? Colors.grey.shade600 : Colors.grey.shade300),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                backgroundColor: Colors.transparent,
                              ),
                              child: Text('Follow', style: TextStyle(color: textColor, fontSize: 16, fontWeight: FontWeight.bold)),
                            ),
                          ),
                          const SizedBox(width: 8),
                          Expanded(
                            child: OutlinedButton(
                              onPressed: () {},
                              style: OutlinedButton.styleFrom(
                                padding: const EdgeInsets.symmetric(vertical: 10),
                                side: BorderSide(color: isDark ? Colors.grey.shade600 : Colors.grey.shade300),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                backgroundColor: isDark ? Colors.grey.shade900 : Colors.grey.shade100,
                              ),
                              child: Text('Message', style: TextStyle(color: textColor, fontSize: 16, fontWeight: FontWeight.bold)),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 16),

                    // Tabs
                    Container(
                      decoration: BoxDecoration(
                        border: Border(bottom: BorderSide(color: isDark ? Colors.grey.shade800 : Colors.grey.shade300)),
                      ),
                      child: Row(
                        children: [
                          Expanded(
                            child: Container(
                              padding: const EdgeInsets.symmetric(vertical: 12),
                              decoration: BoxDecoration(
                                border: Border(bottom: BorderSide(color: textColor, width: 2)),
                              ),
                              child: Icon(Icons.grid_view, color: textColor),
                            ),
                          ),
                          Expanded(
                            child: Padding(
                              padding: const EdgeInsets.symmetric(vertical: 12),
                              child: Icon(Icons.lock_outline, color: subtitleColor),
                            ),
                          ),
                          Expanded(
                            child: Padding(
                              padding: const EdgeInsets.symmetric(vertical: 12),
                              child: Icon(Icons.bookmark_border, color: subtitleColor),
                            ),
                          ),
                          Expanded(
                            child: Padding(
                              padding: const EdgeInsets.symmetric(vertical: 12),
                              child: Icon(Icons.favorite_border, color: subtitleColor),
                            ),
                          ),
                        ],
                      ),
                    ),

                    // Grid
                    GridView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 3,
                        crossAxisSpacing: 1,
                        mainAxisSpacing: 1,
                        childAspectRatio: 0.75,
                      ),
                      itemCount: 9,
                      itemBuilder: (context, index) {
                        return Container(
                          color: isDark ? Colors.grey.shade900 : Colors.grey.shade300,
                          child: Stack(
                            children: [
                              Positioned(
                                bottom: 4,
                                left: 4,
                                child: Row(
                                  children: [
                                    const Icon(Icons.play_arrow, color: Colors.white, size: 14),
                                    const SizedBox(width: 2),
                                    Text(
                                      '${(10 + index * 1.5).toStringAsFixed(1)}K',
                                      style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.bold),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        );
                      },
                    ),
                    const SizedBox(height: 100),
                  ],
                ),
              ),
            ),
            
            // Header
            AnimatedPositioned(
              duration: const Duration(milliseconds: 300),
              curve: Curves.easeInOut,
              top: _showHeader ? 0 : -(MediaQuery.of(context).padding.top + 100),
              left: 0,
              right: 0,
              child: Container(
                color: bgColor,
                padding: EdgeInsets.only(
                  top: MediaQuery.of(context).padding.top + 16,
                  bottom: 16,
                  left: 16,
                  right: 16,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    GestureDetector(
                      onTap: widget.onBack,
                      child: Icon(Icons.arrow_back, color: textColor),
                    ),
                    Row(
                      children: [
                        Text(
                          'tanzania_vibes',
                          style: TextStyle(
                              color: textColor,
                              fontSize: 18,
                              fontWeight: FontWeight.bold),
                        ),
                        const SizedBox(width: 4),
                        Icon(Icons.keyboard_arrow_down, color: textColor),
                      ],
                    ),
                    GestureDetector(
                      onTap: widget.onMenu,
                      child: Icon(Icons.more_horiz, color: textColor),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildStat(String value, String label, Color textColor, Color subtitleColor) {
    return Column(
      children: [
        Text(value,
            style: TextStyle(
                color: textColor,
                fontSize: 18,
                fontWeight: FontWeight.bold)),
        Text(label,
            style: TextStyle(color: subtitleColor, fontSize: 14)),
      ],
    );
  }
}
