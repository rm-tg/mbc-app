import MenuBar from '@/components/MenuBar';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Banner from '../components/Banner';

export default function AboutScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <Banner />
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/')}>
            <Image
              source={require('../assets/about/back-arrow.png')}
              style={styles.arrowImg}
              resizeMode="contain"
            />
            <Text style={styles.homeText}>HOME</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.heading}>About Maize & Blue{'\n'}Cupboard</Text>
          <Text style={styles.sectionTitle}>OUR MISSION</Text>
          <Text style={styles.bodyText}>
            To ensure members of the University of{'\n'}
            Michigan community—whether on a tight{'\n'}
            budget or physically restrained from{'\n'}
            getting to a grocery store—receive{'\n'}
            equitable access to healthy, nutritious, and{'\n'}
            nourishing food and the ability to prepare it{'\n'}
            for themselves or others.
          </Text>
          <Text style={styles.sectionTitle}>WHAT WE PROVIDE</Text>
          <View style={styles.card}>
            <Image source={require('../assets/about/food-icon.png')} style={styles.icon} />
            <Text style={styles.cardText}>
              Produce, dairy, meat,{'\n'}
              bread, frozen and shelf-{'\n'}
              stable foods (i.e. rice,{'\n'}
              cans, tuna, etc.)
            </Text>
          </View>
          <View style={styles.card}>
            <Image source={require('../assets/about/kitchenware-icon.png')} style={styles.icon} />
            <Text style={styles.cardText}>
              Dishes, silverware, pots{'\n'}
              & pans, Tupperware,{'\n'}
              cutting boards, knives,{'\n'}
              and other kitchenware
            </Text>
          </View>
          <View style={styles.card}>
            <Image source={require('../assets/about/supplies-icon.png')} style={styles.icon} />
            <Text style={styles.cardText}>
              Trash bags, toilet paper,{'\n'}
              cleaning supplies,{'\n'}
              hygiene products,{'\n'}
              school supplies, baby{'\n'}
              items and more
            </Text>
          </View>
          <View style={styles.card}>
            <Image source={require('../assets/about/heart-icon.png')} style={styles.icon} />
            <Text style={styles.cardText}>
              Get connected to campus{'\n'}
              experts like CAPS, Dean of{'\n'}
              Students and Financial{'\n'}
              Aid, as well as FAP{'\n'}
              (Michigan’s food program)
            </Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <MenuBar/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    marginLeft: 8,
    marginBottom: 21,
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowImg: {
    width: 24,
    height: 24,
  },
  homeText: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    color: '#00274C',
    letterSpacing: 0.5,
  },
  content: {
    alignItems: 'center',
    paddingBottom: 80,
  },
  heading: {
    fontSize: 24,
    fontFamily: "Montserrat_700Bold",
    color: '#00274C',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    color: '#00274C',
    marginTop: 28,
    marginBottom: 11,
  },
  bodyText: {
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
    color: '#5A6784',
    width: '91.03%',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#00274C',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: '5.13%',
    marginBottom: 14,
    width: '93.85%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 109,
    height: 109,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
    flex: 1,
    textAlign: 'center',
  },
});