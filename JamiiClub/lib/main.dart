import 'package:flutter/material.dart';
import 'profile.dart';
import 'search.dart';
import 'create.dart';
import 'menu.dart';

void main() {
  runApp(const JamiiClubApp());
}

class JamiiClubApp extends StatelessWidget {
  const JamiiClubApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'JamiiClub',
      theme: ThemeData.dark().copyWith(
        scaffoldBackgroundColor: Colors.black,
      ),
      home: const MainScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  int _selectedIndex = 0;

  void _onBack() {
    setState(() {
      _selectedIndex = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: _selectedIndex == 0,
      onPopInvokedWithResult: (didPop, result) {
        if (!didPop) {
          _onBack();
        }
      },
      child: Scaffold(
        extendBody: true,
        body: Stack(
          children: [
            _selectedIndex == 0
                ? PageView.builder(
                    scrollDirection: Axis.vertical,
                    itemCount: 3,
                    itemBuilder: (context, index) {
                      return VideoItem(index: index);
                    },
                  )
                : _selectedIndex == 1
                    ? SearchPage(onBack: _onBack)
                    : _selectedIndex == 2
                        ? CreatePage(onBack: _onBack)
                        : _selectedIndex == 4
                            ? ProfilePage(onBack: _onBack, onMenu: () {
                                setState(() {
                                  _selectedIndex = 5;
                                });
                              })
                            : _selectedIndex == 5
                                ? MenuPage(onBack: () {
                                    setState(() {
                                      _selectedIndex = 4;
                                    });
                                  })
                                : Container(color: Colors.black),
            // Top Navigation
            if (_selectedIndex == 0)
              Positioned(
                top: MediaQuery.of(context).padding.top + 16,
                left: 0,
                right: 0,
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(width: 24, height: 2.5, color: Colors.white),
                          const SizedBox(height: 5),
                          Container(width: 16, height: 2.5, color: Colors.white),
                        ],
                      ),
                      Row(
                      children: [
                        const Text(
                          'Following',
                          style: TextStyle(
                              color: Colors.grey,
                              fontSize: 18,
                              fontWeight: FontWeight.w600),
                        ),
                        const SizedBox(width: 16),
                        Container(
                          width: 1,
                          height: 16,
                          color: Colors.grey,
                        ),
                        const SizedBox(width: 16),
                        Column(
                          children: [
                            const Text(
                              'For You',
                              style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 18,
                                  fontWeight: FontWeight.bold),
                            ),
                            const SizedBox(height: 4),
                            Container(
                              width: 30,
                              height: 3,
                              decoration: BoxDecoration(
                                color: Colors.white,
                                borderRadius: BorderRadius.circular(2),
                              ),
                            )
                          ],
                        ),
                      ],
                    ),
                    GestureDetector(
                      onTap: () {
                        setState(() {
                          _selectedIndex = 1;
                        });
                      },
                      child: const Icon(Icons.search, color: Colors.white),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
        bottomNavigationBar: Container(
          decoration: BoxDecoration(
            color: (_selectedIndex == 0 || _selectedIndex == 2) 
                ? Colors.transparent 
                : Theme.of(context).scaffoldBackgroundColor,
            gradient: (_selectedIndex == 0 || _selectedIndex == 2)
                ? LinearGradient(
                    begin: Alignment.bottomCenter,
                    end: Alignment.topCenter,
                    colors: [Colors.black.withOpacity(0.9), Colors.transparent],
                  )
                : null,
          ),
          child: BottomNavigationBar(
            backgroundColor: Colors.transparent,
            elevation: 0,
            type: BottomNavigationBarType.fixed,
            showSelectedLabels: false,
            showUnselectedLabels: false,
            currentIndex: _selectedIndex,
            onTap: (index) {
              setState(() {
                _selectedIndex = index;
              });
            },
            items: [
              BottomNavigationBarItem(
                icon: Icon(Icons.home, color: _selectedIndex == 0 ? ((_selectedIndex == 0 || _selectedIndex == 2) ? Colors.white : (Theme.of(context).brightness == Brightness.dark ? Colors.white : Colors.black)) : Colors.grey.shade400, size: 30),
                label: 'Home',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.search, color: _selectedIndex == 1 ? ((_selectedIndex == 0 || _selectedIndex == 2) ? Colors.white : (Theme.of(context).brightness == Brightness.dark ? Colors.white : Colors.black)) : Colors.grey.shade400, size: 30),
                label: 'Discover',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.add, color: _selectedIndex == 2 ? ((_selectedIndex == 0 || _selectedIndex == 2) ? Colors.white : (Theme.of(context).brightness == Brightness.dark ? Colors.white : Colors.black)) : Colors.grey.shade400, size: 32),
                label: 'Add',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.message, color: _selectedIndex == 3 ? ((_selectedIndex == 0 || _selectedIndex == 2) ? Colors.white : (Theme.of(context).brightness == Brightness.dark ? Colors.white : Colors.black)) : Colors.grey.shade400, size: 30),
                label: 'Inbox',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.person, color: _selectedIndex == 4 ? ((_selectedIndex == 0 || _selectedIndex == 2) ? Colors.white : (Theme.of(context).brightness == Brightness.dark ? Colors.white : Colors.black)) : Colors.grey.shade400, size: 30),
                label: 'Profile',
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class VideoItem extends StatelessWidget {
  final int index;
  const VideoItem({super.key, required this.index});

  @override
  Widget build(BuildContext context) {
    final colors = [Colors.blue.shade900, Colors.green.shade900, Colors.purple.shade900];
    final color = colors[index % colors.length];

    return Container(
      color: Colors.black,
      child: Stack(
        children: [
          Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [color ?? Colors.black, Colors.black],
              ),
            ),
          ),
          const Center(
            child: Icon(Icons.tv, size: 120, color: Colors.white12),
          ),
          
          // Right Actions
          Positioned(
            right: 16,
            bottom: 100,
            child: Column(
              children: [
                _buildProfileItem(),
                const SizedBox(height: 24),
                _buildActionItem(Icons.favorite, '1.2M', Colors.white),
                const SizedBox(height: 16),
                _buildActionItem(Icons.chat_bubble_outline, '450', Colors.white),
                const SizedBox(height: 16),
                _buildActionItem(Icons.bookmark, '4K', Colors.white),
                const SizedBox(height: 16),
                _buildActionItem(Icons.send, '12K', Colors.white),
                const SizedBox(height: 24),
                _buildMusicDisk(),
              ],
            ),
          ),

          // Bottom Info
          const Positioned(
            left: 16,
            bottom: 100,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '@tanzania_vibes',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.white),
                ),
                SizedBox(height: 8),
                Text(
                  'Kila kitu kama kilivyo! #tiktok #tanzania',
                  style: TextStyle(fontSize: 14, color: Colors.white),
                ),
                SizedBox(height: 12),
                Row(
                  children: [
                    Icon(Icons.music_note, color: Colors.white, size: 16),
                    SizedBox(width: 8),
                    Text('Original Sound - Bongo Flava', style: TextStyle(color: Colors.white, fontSize: 14)),
                  ],
                )
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildProfileItem() {
    return Stack(
      clipBehavior: Clip.none,
      alignment: Alignment.bottomCenter,
      children: [
        Container(
          width: 50,
          height: 50,
          decoration: BoxDecoration(
            color: Colors.white,
            shape: BoxShape.circle,
            border: Border.all(color: Colors.white, width: 2),
          ),
          child: const Center(
            child: Icon(Icons.person, color: Colors.grey, size: 30),
          ),
        ),
        Positioned(
          bottom: -8,
          child: Container(
            width: 20,
            height: 20,
            decoration: BoxDecoration(
              color: Colors.red,
              shape: BoxShape.circle,
              border: Border.all(color: Colors.black, width: 2),
            ),
            child: const Center(
              child: Icon(Icons.add, color: Colors.white, size: 12),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildActionItem(IconData icon, String text, Color color) {
    return Column(
      children: [
        Icon(icon, color: color, size: 35),
        const SizedBox(height: 4),
        Text(text, style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w600)),
      ],
    );
  }

  Widget _buildMusicDisk() {
    return Container(
      width: 50,
      height: 50,
      decoration: BoxDecoration(
        color: Colors.grey.shade800,
        shape: BoxShape.circle,
        border: Border.all(color: Colors.black, width: 10),
      ),
      child: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [Colors.grey.shade700, Colors.grey.shade500],
          ),
          shape: BoxShape.circle,
        ),
        child: const Center(
          child: Icon(Icons.music_note, color: Colors.white, size: 14),
        ),
      ),
    );
  }
}
